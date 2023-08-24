import { rinkeby as defaultRinkeby, mainnet as defaultMainnet, goerli as defaultGoerli } from 'wagmi/chains'
import { Chain } from 'wagmi'

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'avalanche',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },
}

export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    default: 'https://bsc-dataseed1.binance.org',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 15921452,
  },
}

export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
    // https://docs.nodereal.io/nodereal/meganode/meganode-api-overview/public-api-key
    nodeReal: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 17422483,
  },
  testnet: true,
}

export const rinkeby: Chain = {
  ...defaultRinkeby,
  rpcUrls: {
    ...defaultRinkeby.rpcUrls,
    // https://docs.nodereal.io/nodereal/meganode/meganode-api-overview/public-api-key
    nodeReal: 'https://eth-rinkeby.nodereal.io/v1/a4da384bf3334c5ea992eb0bf44135e0',
  },
}

export const mainnet: Chain = {
  ...defaultMainnet,
  rpcUrls: {
    ...defaultMainnet.rpcUrls,
    // https://docs.nodereal.io/nodereal/meganode/meganode-api-overview/public-api-key
    nodeReal: 'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7',
  },
}

export const goerli: Chain = {
  ...defaultGoerli,
  rpcUrls: {
    ...defaultGoerli.rpcUrls,
    // https://docs.nodereal.io/nodereal/meganode/meganode-api-overview/public-api-key
    nodeReal: 'https://eth-goerli.nodereal.io/v1/79c5963a17324f79bc42cc888c26462a',
  },
}

export const baobab: Chain = {
  id: 1001,
  name: 'Baobab Klaytn',
  network: 'baobab',
  nativeCurrency: {
    decimals: 18,
    name: 'Klaytn Token',
    symbol: 'KLAY',
  },
  rpcUrls: {
    default: 'https://public-node-api.klaytnapi.com/v1/baobab',
    // https://docs.nodereal.io/nodereal/meganode/meganode-api-overview/public-api-key
    nodeReal: 'https://public-node-api.klaytnapi.com/v1/baobab',
  },
  blockExplorers: {
    default: { name: 'klaytnscope', url: 'https://baobab.scope.klaytn.com' },
  },
  multicall: {
    address: '0x40643b8aeaaca0b87ea1a1e596e64a0e14b1d244',
    blockCreated: 87232478,
  },
  testnet: true,
}

export const klaytn: Chain = {
  id: 8217,
  name: 'Klaytn',
  network: 'cypress',
  nativeCurrency: {
    decimals: 18,
    name: 'Klaytn Token',
    symbol: 'KLAY',
  },
  rpcUrls: {
    default: 'https://public-en-cypress.klaytn.net',
    // https://docs.nodereal.io/nodereal/meganode/meganode-api-overview/public-api-key
    nodeReal: 'https://public-en-cypress.klaytn.net',
  },
  blockExplorers: {
    default: { name: 'klaytnscope', url: 'https://scope.klaytn.com' },
  },
  multicall: {
    address: '0xd11dfc2ab34abd3e1abfba80b99aefbd6255c4b8',
    blockCreated:
      103742609,
  },
}