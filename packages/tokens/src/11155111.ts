import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDT_SEPOLIA, USDC_SEPOLIA } from './common'
// 수정
export const sepoliaTokens = {
  weth: WETH9[ChainId.SEPOLIA],
  foc: new Token(ChainId.SEPOLIA, '0x7D26dcDB329d38d979863f0425b4cF0Dc29Df074', 18, 'FOC', 'FOC Token', ''),
  usdt: USDT_SEPOLIA,
  usdc: USDC_SEPOLIA,
}
