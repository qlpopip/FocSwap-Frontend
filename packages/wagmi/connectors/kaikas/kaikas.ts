/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import {
  Chain,
  ConnectorNotFoundError,
  ResourceUnavailableError,
  RpcError,
  UserRejectedRequestError,
  SwitchChainNotSupportedError,
} from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { hexValue } from '@ethersproject/bytes'

const mappingNetwork: Record<number, string> = {
  1001: 'baobab',
  8217: 'klaytn',
}

export class KaikasConnector extends InjectedConnector {
  readonly id = 'Kaikas'

  readonly ready = typeof window !== 'undefined' && !!window.klaytn

  provider?: Window['klaytn']

  constructor({
    chains: _chains,
  }: {
    chains?: Chain[]
  } = {}) {
    const options = {
      name: 'Kaikas',
      shimDisconnect: true,
      shimChainChangedDisconnect: true,
    }
    const chains = _chains?.filter((c) => !!mappingNetwork[c.id])
    super({
      chains,
      options,
    })
  }

  async connect({ chainId }: { chainId?: number } = {}) {
    try {
      const provider = await this.getProvider()
      if (!provider) throw new ConnectorNotFoundError()

      if (provider.on) {
        provider.on('accountsChanged', this.onAccountsChanged)
        provider.on('networkChanged', this.onChainChanged)
        provider.on('disconnect', this.onDisconnect)
      }

      this.emit('message', { type: 'connecting' })

      const account = await this.getAccount()
      // Switch to chain if provided
      let id = await this.getChainId()
      let unsupported = this.isChainUnsupported(id)
      if (chainId && id !== chainId) {
        const chain = await this.switchChain(chainId)
        id = chain.id
        unsupported = this.isChainUnsupported(id)
      }

      return { account, chain: { id, unsupported }, provider }
    } catch (error) {
      if (this.isUserRejectedRequestError(error)) throw new UserRejectedRequestError(error)
      if ((<RpcError>error).code === -32002) throw new ResourceUnavailableError(error)
      throw error
    }
  }

  async getProvider() {
    if (typeof window !== 'undefined') {
      // TODO: Fallback to `ethereum#initialized` event for async injection
      // https://github.com/MetaMask/detect-provider#synchronous-and-asynchronous-injection=
      this.provider = window.klaytn
    }
    return this.provider
  }

  async switchChain(chainId: number): Promise<Chain> {
    const provider = await this.getProvider()
    if (!provider) throw new ConnectorNotFoundError()

    const id = hexValue(chainId)

    if (mappingNetwork[chainId]) {
      try {
        await provider.request?.({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: id}]
        })

        return (
          this.chains.find((x) => x.id === chainId) ?? {
            id: chainId,
            name: `Chain ${id}`,
            network: `${id}`,
            rpcUrls: { default: '' },
          }
        )
      } catch (error) {
        if ((error as any).error === 'user rejected') {
          throw new UserRejectedRequestError(error)
        }
      }
    }
    throw new SwitchChainNotSupportedError({ connector: this })
  }
}
