import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDT_BASE_TESTNET, USDC_BASE_TESTNET } from './common'
// 수정
export const baseTestTokens = {
  weth: WETH9[ChainId.BASE_TESTNET],
  foc: new Token(ChainId.BASE_TESTNET, '0xF19AaAE719182296b6876cE514B1f0e96cf0ec18', 18, 'FOC', 'FOC Token', ''),
  usdt: USDT_BASE_TESTNET,
  usdc: USDC_BASE_TESTNET,
}
