import { ChainId, Token } from '@pancakeswap/sdk'
// 수정
export const CAKE_MAINNET = new Token(
  ChainId.BSC,
  '0x90f193b165159345E0E61703Eb6A25480213480f',
  18,
  'FOC',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CAKE_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CAKE_GOERLI = new Token(
  ChainId.GOERLI,
  '0x697A539Ef37aC83980af8e59b5055f11d7dFc964',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CAKE_SEPOLIA = new Token(
  ChainId.SEPOLIA,
  '0x7D26dcDB329d38d979863f0425b4cF0Dc29Df074',
  18,
  'FOC',
  'FOC Token',
  'https://pancakeswap.finance/',
)
// 수정
export const CAKE_BAOBAB = new Token(
  ChainId.BAOBAB,
  '0xA3cC8931C919023240aD9eE3Df6497ae5a40b4D1',
  18,
  'FOC',
  'FOC Token',
  'https://pancakeswap.finance/',
)

export const CAKE_KLAYTN = new Token(
  ChainId.KLAYTN,
  '0x044925B7c6AA8EF03Ad294Bc48EDC1a2c3877a6D',
  18,
  'FOC',
  'FOC Token',
  'https://pancakeswap.finance/',
)

export const USDC_BSC = new Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_SEPOLIA = new Token(
  ChainId.SEPOLIA,
  '0x91b957Af6aFF2B086A2470A4D24F4Ca029A05864',
  18,
  'USDC',
  'USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_BAOBAB = new Token(
  ChainId.BAOBAB,
  '0x839c72c528397933681773ff48186875d845eb7a',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new Token(ChainId.ETHEREUM, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')

export const USDC_RINKEBY = new Token(
  ChainId.RINKEBY,
  '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDC_GOERLI = new Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BSC = new Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_SEPOLIA = new Token(
  ChainId.SEPOLIA,
  '0x643aDE6A46b9184E33eccB6d20F66176950dd8Bb',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_BAOBAB = new Token(
  ChainId.BAOBAB,
  '0x861F86BC2671fD1E2c60602F5b7f24BB731f5F95',
  18,
  'oUSDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_KLAYTN = new Token(
  ChainId.KLAYTN,
  '0xceE8FAF64bB97a73bb51E115Aa89C17FfA8dD167',
  6,
  'oUSDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ETH = new Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x8516Fc284AEEaa0374E66037BD2309349FF728eA',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_RINKEBY = new Token(
  ChainId.RINKEBY,
  '0x4e2442A6f7AeCE64Ca33d31756B5390860BF973E',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_SEPOLIA = new Token(
  ChainId.GOERLI,
  '0xa8C4c48d714FBEB878b68243482aDEc013D28Ffe',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_BAOBAB = new Token(
  ChainId.BAOBAB,
  '0x210bc03f49052169d5588a52c317f71cf2078b85',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.RINKEBY]: BUSD_RINKEBY,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.SEPOLIA]: BUSD_SEPOLIA,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
  [ChainId.BAOBAB]: BUSD_BAOBAB,
  [ChainId.KLAYTN]: BUSD_BAOBAB,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
  [ChainId.GOERLI]: CAKE_GOERLI,
  [ChainId.SEPOLIA]: CAKE_SEPOLIA,
  [ChainId.BAOBAB]: CAKE_BAOBAB,
  [ChainId.KLAYTN]: CAKE_KLAYTN,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.RINKEBY]: USDC_RINKEBY,
  [ChainId.GOERLI]: USDC_GOERLI,
  [ChainId.SEPOLIA]: USDC_SEPOLIA,
  [ChainId.BAOBAB]: USDC_BAOBAB,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
  [ChainId.BAOBAB]: USDT_BAOBAB,
  [ChainId.KLAYTN]: USDT_KLAYTN,
  [ChainId.SEPOLIA]: USDT_SEPOLIA,
}
