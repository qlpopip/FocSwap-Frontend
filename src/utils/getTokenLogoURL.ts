import { ChainId, Token } from '@pancakeswap/sdk'
import { ChainLogo } from 'components/Logo/ChainLogo'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.BAOBAB]: 'klaytn',
  [ChainId.KLAYTN]: 'klaytn',
  [ChainId.SAIGON]: 'saigon',
  [ChainId.BASE_TESTNET]: 'base',
  [ChainId.BASE]: 'base',
}

const getTokenLogoURL = (token?: Token) => {
  if (token && mapping[token.chainId]) {
    return `https://raw.githubusercontent.com/meritz3695/foc-assets/main/tokens/${token.address}.png`
  }
  return null
}

export default getTokenLogoURL
