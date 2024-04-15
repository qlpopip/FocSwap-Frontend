import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDT_BASE_TESTNET, USDC_BASE_TESTNET } from './common'
// 수정
export const baseTestTokens = {
  weth: WETH9[ChainId.BASE_TESTNET],
  foc: new Token(ChainId.BASE_TESTNET, '0x198028E8c21324De512F369dDF2D404c608034Db', 18, 'FOC', 'FOC Token', ''),
  usdt: USDT_BASE_TESTNET,
  usdc: USDC_BASE_TESTNET,
}
