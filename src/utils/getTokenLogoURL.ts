import { ChainId, Token } from '@pancakeswap/sdk'
import { ChainLogo } from 'components/Logo/ChainLogo'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.BAOBAB]: 'klaytn',
  [ChainId.KLAYTN]: 'klaytn',
  [ChainId.SEPOLIA]: 'ethereum',
  [ChainId.SAIGON]: 'saigon',
}

const getTokenLogoURL = (token?: Token) => {
  if (token && mapping[token.chainId]) {
    return `https://raw.githubusercontent.com/Meritz12456/TokenImages/main/${token.address}.png`
  }
  return null
}

export default getTokenLogoURL
