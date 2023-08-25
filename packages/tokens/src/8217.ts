import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDT_KLAYTN } from './common'
//수정
export const klaytnTokens = {
    weth: WETH9[ChainId.KLAYTN],
    odi: new Token(ChainId.KLAYTN, '0x044925B7c6AA8EF03Ad294Bc48EDC1a2c3877a6D', 18, 'ODI', 'ODI Token', ''),
    usdt: USDT_KLAYTN,
    lcg: new Token(ChainId.KLAYTN, '0xEf632E070Df56371Ad33A85148De398104EC55aB', 18, 'LCG', 'LCG Token', ''),
<<<<<<< HEAD
    oeth: new Token(ChainId.KLAYTN, '0x34d21b1e550d73cee41151c77f3c73359527a396', 18, 'oETH', 'oETH Token', ''),
=======
    oETH: new Token(ChainId.KLAYTN, '0x34d21b1e550d73cee41151c77f3c73359527a396', 18, 'oETH', 'oETH Token', ''),
>>>>>>> a9a309c14b4a180bc39e84fa668fe9a22bd97add
}
