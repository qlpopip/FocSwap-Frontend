import { ChainId } from '@pancakeswap/sdk'
import store from 'state'
import { GAS_PRICE_GWEI } from 'state/types'


const getGasPrice = (chainId = ChainId.KLAYTN): string => {
  const state = store.getState()
  const userGas = state.user.gasPrice || GAS_PRICE_GWEI.default
  return chainId === ChainId.BSC ? userGas : userGas
}

export default getGasPrice
