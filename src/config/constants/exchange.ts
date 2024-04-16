import { ChainId, JSBI, Percent, Token, WNATIVE, WBNB } from '@pancakeswap/sdk'
import { BigNumber } from '@ethersproject/bignumber'
import {
  bscTokens,
  bscTestnetTokens,
  USDC,
  USDT,
  BUSD,
  baobabTokens,
  klaytnTokens,
  saigonTokens,
  baseTestTokens,
} from '@pancakeswap/tokens'
import { ChainMap, ChainTokenList } from './types'

export const ROUTER_ADDRESS: ChainMap<string> = {
  [ChainId.ETHEREUM]: '0x3BC722f252C7bAE2f55647e49aDcB9d33Ff6eBcC',
  [ChainId.RINKEBY]: '0x3BC722f252C7bAE2f55647e49aDcB9d33Ff6eBcC',
  [ChainId.GOERLI]: '0x4cfF519Baa5F9D047c8671839B4A10EEE5088ef1',
  [ChainId.BSC]: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  [ChainId.BSC_TESTNET]: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1',
  [ChainId.BAOBAB]: '0xec439a2b276DE791c0fCEE73450f6DcB96A7726A',
  [ChainId.KLAYTN]: '0x6FC56a0D502AA30791e949E1b7D05dA58635023b',
  [ChainId.SAIGON]: '0x45d29Fa8F9Db474BE7653Fb3e88eB45aA60a2e46',
  [ChainId.BASE_TESTNET]: '0x0593dE33F2753132e557e37a0744e71d3CBCD5Cc',
} // 수정

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.ETHEREUM]: [
    WNATIVE[ChainId.ETHEREUM],
    USDC[ChainId.ETHEREUM],
    USDT[ChainId.ETHEREUM],
    BUSD[ChainId.ETHEREUM],
    WBNB[ChainId.ETHEREUM],
  ],
  [ChainId.RINKEBY]: [WNATIVE[ChainId.RINKEBY], USDC[ChainId.RINKEBY], BUSD[ChainId.RINKEBY]],
  [ChainId.GOERLI]: [WNATIVE[ChainId.GOERLI], USDC[ChainId.GOERLI], BUSD[ChainId.GOERLI]],
  [ChainId.SAIGON]: [WNATIVE[ChainId.SAIGON], USDC[ChainId.SAIGON], USDT[ChainId.SAIGON]],
  [ChainId.BASE_TESTNET]: [WNATIVE[ChainId.BASE_TESTNET], USDC[ChainId.BASE_TESTNET], USDT[ChainId.BASE_TESTNET]],
  [ChainId.BSC]: [
    bscTokens.wbnb,
    bscTokens.cake,
    bscTokens.busd,
    bscTokens.usdt,
    bscTokens.btcb,
    bscTokens.eth,
    bscTokens.usdc,
  ],
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.wbnb, bscTestnetTokens.cake, bscTestnetTokens.busd],
  [ChainId.BAOBAB]: [WNATIVE[ChainId.BAOBAB], USDT[ChainId.BAOBAB]],
  [ChainId.KLAYTN]: [WNATIVE[ChainId.KLAYTN], USDT[ChainId.KLAYTN]],
}

/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.BSC]: {},
}
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.BSC]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.BSC]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.ETHEREUM]: [USDC[ChainId.ETHEREUM], WBNB[ChainId.ETHEREUM], BUSD[ChainId.ETHEREUM], USDT[ChainId.ETHEREUM]],
  [ChainId.RINKEBY]: [USDC[ChainId.RINKEBY], WNATIVE[ChainId.RINKEBY], BUSD[ChainId.RINKEBY]],
  [ChainId.GOERLI]: [USDC[ChainId.GOERLI], WNATIVE[ChainId.GOERLI], BUSD[ChainId.GOERLI]],
  [ChainId.SAIGON]: [USDC[ChainId.SAIGON], WNATIVE[ChainId.SAIGON], USDT[ChainId.SAIGON], saigonTokens.foc],
  [ChainId.BSC]: [bscTokens.busd, bscTokens.cake, bscTokens.btcb],
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.wbnb, bscTestnetTokens.cake, bscTestnetTokens.busd],
  [ChainId.BAOBAB]: [USDT[ChainId.BAOBAB], WNATIVE[ChainId.BAOBAB]],
  [ChainId.KLAYTN]: [USDT[ChainId.KLAYTN]],
  [ChainId.BASE_TESTNET]: [USDT[ChainId.BASE_TESTNET], WNATIVE[ChainId.BASE_TESTNET], baseTestTokens.foc],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.ETHEREUM]: [
    USDC[ChainId.ETHEREUM],
    WNATIVE[ChainId.ETHEREUM],
    BUSD[ChainId.ETHEREUM],
    USDT[ChainId.ETHEREUM],
    WBNB[ChainId.ETHEREUM],
  ],
  [ChainId.RINKEBY]: [USDC[ChainId.RINKEBY], WNATIVE[ChainId.RINKEBY], BUSD[ChainId.RINKEBY]],
  [ChainId.GOERLI]: [USDC[ChainId.GOERLI], WNATIVE[ChainId.GOERLI], BUSD[ChainId.GOERLI]],
  [ChainId.SAIGON]: [USDC[ChainId.SAIGON], WNATIVE[ChainId.SAIGON], saigonTokens.foc],
  [ChainId.BSC]: [bscTokens.wbnb, bscTokens.dai, bscTokens.busd, bscTokens.usdt, bscTokens.cake],
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.wbnb, bscTestnetTokens.cake, bscTestnetTokens.busd],
  [ChainId.BAOBAB]: [USDT[ChainId.BAOBAB], WNATIVE[ChainId.BAOBAB]],
  [ChainId.KLAYTN]: [USDT[ChainId.KLAYTN], WNATIVE[ChainId.KLAYTN]],
  [ChainId.BASE_TESTNET]: [USDT[ChainId.BASE_TESTNET], WNATIVE[ChainId.BASE_TESTNET], baseTestTokens.foc],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.ETHEREUM]: [
    [WNATIVE[ChainId.ETHEREUM], USDC[ChainId.ETHEREUM]],
    [WBNB[ChainId.ETHEREUM], USDC[ChainId.ETHEREUM]],
    [WBNB[ChainId.ETHEREUM], BUSD[ChainId.ETHEREUM]],
    [WBNB[ChainId.ETHEREUM], USDT[ChainId.ETHEREUM]],
    [WBNB[ChainId.ETHEREUM], WNATIVE[ChainId.ETHEREUM]],
  ],
  [ChainId.BSC]: [
    [bscTokens.cake, bscTokens.wbnb],
    [bscTokens.busd, bscTokens.usdt],
    [bscTokens.dai, bscTokens.usdt],
  ],
  [ChainId.BASE_TESTNET]: [
    [WNATIVE[ChainId.BASE_TESTNET], USDT[ChainId.BASE_TESTNET]],
    [baseTestTokens.foc, USDT[ChainId.BASE_TESTNET]],
  ],
}

export const BIG_INT_ZERO = JSBI.BigInt(0)
export const BIG_INT_TEN = JSBI.BigInt(10)

// one basis point
export const BIPS_BASE = JSBI.BigInt(10000)
export const ONE_BIPS = new Percent(JSBI.BigInt(1), BIPS_BASE)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(BIG_INT_TEN, JSBI.BigInt(16)) // .01 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), BIPS_BASE)

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const BASE_FEE = new Percent(JSBI.BigInt(25), BIPS_BASE)
export const INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(BASE_FEE)

// BNB
export const DEFAULT_INPUT_CURRENCY = 'BNB'
// CAKE
export const DEFAULT_OUTPUT_CURRENCY = '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'

// Handler string is passed to Gelato to use PCS router
export const GELATO_HANDLER = 'pancakeswap'
export const GENERIC_GAS_LIMIT_ORDER_EXECUTION = BigNumber.from(500000)

export const LIMIT_ORDERS_DOCS_URL = 'https://docs.pancakeswap.finance/products/pancakeswap-exchange/limit-orders'
