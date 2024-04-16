import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_BAOBAB } from './common'
// 수정
export const baobabTokens = {
  weth: WETH9[ChainId.BAOBAB],
  usdt: new Token(ChainId.BAOBAB, '0x86eF3B9d8FA7050F8CbBf56CAB762F5C642D054d', 18, 'oUSDT', 'oUSDT Token', ''),
  usdc: USDC_BAOBAB,
}
