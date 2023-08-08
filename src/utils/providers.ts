import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const Baobabprodnode = 'https://public-en-baobab.klaytn.net/'

export const baobabRpcProvider = new StaticJsonRpcProvider(Baobabprodnode)

export default null
