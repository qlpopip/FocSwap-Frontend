import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI } from './common'

export const goerliTestnetTokens = {
  weth: WETH9[ChainId.GOERLI],
  celr: new Token(ChainId.GOERLI, '0x5D3c0F4cA5EE99f8E8F59Ff9A5fAb04F6a7e007f', 18, 'CELR', 'CelerToken', ''),
  leet: new Token(ChainId.GOERLI, '0xBd509651E6374c327d24b9d7E3Ea46704f6F31E8', 18, 'LEET', 'Leet Token', ''),
  usdc: USDC_GOERLI,
  uni: new Token(ChainId.GOERLI, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uniswap Token', ''),
}
