import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI } from './common'

export const baobabTokens = {
  weth: WETH9[ChainId.BAOBAB],
  odi: new Token(ChainId.BAOBAB, '0x30EB1AB7eA42dAb8d6839b929c11A0f4F2a1F2CE', 18, 'ODI', 'ODI Token', '')
}
