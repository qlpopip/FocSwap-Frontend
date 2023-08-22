import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_BAOBAB } from './common'
//수정
export const baobabTokens = {
  weth: WETH9[ChainId.BAOBAB],
  odi: new Token(ChainId.BAOBAB, '0xA3cC8931C919023240aD9eE3Df6497ae5a40b4D1', 18, 'ODI', 'ODI Token', ''),
  usdt: new Token(ChainId.BAOBAB, '0x86eF3B9d8FA7050F8CbBf56CAB762F5C642D054d', 18, 'oUSDT', 'oUSDT Token', ''),
  lcg: new Token(ChainId.BAOBAB, '0x286A9832a28aD177EdCBAa1f78A842B1013019d4', 18, 'LCG', 'LCG Token', ''),
  aaa: new Token(ChainId.BAOBAB, '0x9967a82d580a94724471ce331c8eb7b882e41ac5', 18, 'AAA', 'AAA Token', ''),
  usdc: USDC_BAOBAB
}
