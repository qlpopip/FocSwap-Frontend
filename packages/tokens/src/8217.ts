import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDT_KLAYTN } from './common'
//수정
export const klaytnTokens = {
    weth: WETH9[ChainId.KLAYTN],
    odi: new Token(ChainId.KLAYTN, '0x044925B7c6AA8EF03Ad294Bc48EDC1a2c3877a6D', 18, 'ODI', 'ODI Token', ''),
    usdt: USDT_KLAYTN,
    lcg: new Token(ChainId.KLAYTN, '0xEf632E070Df56371Ad33A85148De398104EC55aB', 18, 'LCG', 'LCG Token', ''),
    oETH: new Token(ChainId.KLAYTN, '0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167', 18, 'oETH', 'ETH', ''),
}
