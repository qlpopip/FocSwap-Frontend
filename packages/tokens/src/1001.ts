import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI } from './common'

export const baobabTokens = {
  weth: WETH9[ChainId.BAOBAB],
  odi: new Token(ChainId.BAOBAB, '0x30EB1AB7eA42dAb8d6839b929c11A0f4F2a1F2CE', 18, 'ODI', 'ODI Token', ''),
  PT1: new Token(ChainId.BAOBAB, '0x34441EC01791d9E76F6960c87028d58DbFA8720C', 18, 'PT1', 'Pool Token 1', ''),
  PT_1: new Token(ChainId.BAOBAB, '0x337F348189121C37e3E11948d2598C2fbc9A7F08', 18, 'PT1', 'Pool Token 1', '')
}
