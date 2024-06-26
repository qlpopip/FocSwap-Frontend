import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  ETHEREUM = 1,
  RINKEBY = 4,
  GOERLI = 5,
  BSC = 56,
  BSC_TESTNET = 97,
  BAOBAB = 1001,
  KLAYTN = 8217,
  SAIGON = 2021,
  BASE_TESTNET = 84532,
  BASE = 8453,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const FACTORY_ADDRESS = '0xcadf154dDd64faA6D568F793d49383b9bfc99FDe'

// // TODO: ETH This is test version, do not depends on it
const FACTORY_ADDRESS_ETH = '0xD93801d7D3a368D94A3A32E97A20f7aC1948a5dB'
//수정
export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.RINKEBY]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: '0x0d53887A7EE0a6e941b496Bef8a41CaC4a03124c',
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
  [ChainId.BAOBAB]: '0xcb78A0AC1DfEfDD1b0a6F317AFA181D7B2bcCace',
  [ChainId.KLAYTN]: '0xef2E94DDB76e128B1aB74a7433d26879A1a15f75',
  [ChainId.SAIGON]: '0x8498E2d7a9d579fAB3AA1056F18A863e789b6321',
  [ChainId.BASE_TESTNET]: '0xcb7E32FeE4C3d7BE9b4f29e08b0E784b3738B52a',
  [ChainId.BASE]: '0xc1EB2Cdf635D0Aa7B753268bA3B642Ce2f561957',
}
export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH,
  [ChainId.RINKEBY]: INIT_CODE_HASH_ETH,
  [ChainId.GOERLI]: '0x29bd6d25b5a86f6ac94daf96ae9932a8109dee0e95aff78c7c9d38ee24fd6f88',
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.BAOBAB]: '0x29bd6d25b5a86f6ac94daf96ae9932a8109dee0e95aff78c7c9d38ee24fd6f88',
  [ChainId.KLAYTN]: '0x29bd6d25b5a86f6ac94daf96ae9932a8109dee0e95aff78c7c9d38ee24fd6f88',
  [ChainId.SAIGON]: '0x50368cf9d6b394e5bf92ece698ed924a1d0dd04b6e8d6bbc50020afa3e460bed',
  [ChainId.BASE_TESTNET]: '0x50368cf9d6b394e5bf92ece698ed924a1d0dd04b6e8d6bbc50020afa3e460bed',
  [ChainId.BASE]: '0x50368cf9d6b394e5bf92ece698ed924a1d0dd04b6e8d6bbc50020afa3e460bed',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9975 = JSBI.BigInt(9975)
export const _10000 = JSBI.BigInt(10000)

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}

export const WETH9 = {
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.BAOBAB]: new Token(
    ChainId.BAOBAB,
    '0x043c471bee060e00a56ccd02c0ca286808a5a436',
    18,
    'WKLAY',
    'Wrapped KLAY',
    'https://weth.io'
  ),
  [ChainId.KLAYTN]: new Token(
    ChainId.KLAYTN,
    '0x19aac5f612f524b754ca7e7c41cbfa2e981a4432',
    18,
    'WKLAY',
    'Wrapped KLAY',
    'https://weth.io'
  ),
  [ChainId.SAIGON]: new Token(
    ChainId.SAIGON,
    '0xa959726154953bae111746e265e6d754f48570e6',
    18,
    'WRON',
    'Wrapped RON',
    'https://weth.io'
  ),
  [ChainId.BASE_TESTNET]: new Token(
    ChainId.BASE_TESTNET,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.BASE]: new Token(
    ChainId.BASE,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
}

export const WBNB = {
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC]: new Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
}

export const WNATIVE: Record<number, Token> = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.RINKEBY]: WETH9[ChainId.RINKEBY],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
  [ChainId.BAOBAB]: WETH9[ChainId.BAOBAB],
  [ChainId.KLAYTN]: WETH9[ChainId.KLAYTN],
  [ChainId.SAIGON]: WETH9[ChainId.SAIGON],
  [ChainId.BASE_TESTNET]: WETH9[ChainId.BASE_TESTNET],
  [ChainId.BASE]: WETH9[ChainId.BASE],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.RINKEBY]: { name: 'Rinkeby Ether', symbol: 'RIN', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  [ChainId.BAOBAB]: { name: 'Baobab Klay', symbol: 'KLAY', decimals: 18 },
  [ChainId.KLAYTN]: { name: 'Klay', symbol: 'KLAY', decimals: 18 },
  [ChainId.SAIGON]: { name: 'Saigon Ron', symbol: 'RON', decimals: 18 },
  [ChainId.BASE_TESTNET]: { name: 'Base Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.BASE]: { name: 'Ether', symbol: 'ETH', decimals: 18 },

  [ChainId.BSC]: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  [ChainId.BSC_TESTNET]: {
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
    decimals: 18,
  },
}
