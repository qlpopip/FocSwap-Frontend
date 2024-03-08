import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const Baobabprodnode = 'https://public-en-baobab.klaytn.net/'

export const Klaytnprodnode = 'https://public-node-api.klaytnapi.com/v1/cypress/'

export const Sepoliaprodnode = 'https://rpc2.sepolia.org'

export const Saigonprodnode = 'https://saigon-testnet.roninchain.com/rpc'

export const baobabRpcProvider = new StaticJsonRpcProvider(Baobabprodnode)

export const sepoliaRpcProvider = new StaticJsonRpcProvider(Sepoliaprodnode)

export const saigonRpcProvider = new StaticJsonRpcProvider(Saigonprodnode)

export default null
