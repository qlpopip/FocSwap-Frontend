import { ChainId } from '@pancakeswap/sdk'
import FarmsBscPriceHelper from './farms/56'
import FarmsBscTestnetPriceHelper from './farms/97'
import FarmsEthereumPriceHelper from './farms/1'
import FarmsGoerliPriceHelper from './farms/5'
import FarmsBaobabPriceHelper from './farms/1001'
import FarmsKlaytnPriceHelper from './farms/8217'
import FarmsSepoliaPriceHelper from './farms/11155111'
import PoolsBscPriceHelper from './pools/56'
import PoolsBscTestnetPriceHelper from './pools/97'
import PoolsEthereumPriceHelper from './pools/1'
import PoolsGoerliPriceHelper from './pools/5'
import PoolsBaobabPriceHelper from './pools/1001'
import PoolsKlaytnPriceHelper from './pools/8217'
import PoolsSepoliaPriceHelper from './pools/11155111'

export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BSC:
      return FarmsBscPriceHelper
    case ChainId.BSC_TESTNET:
      return FarmsBscTestnetPriceHelper
    case ChainId.ETHEREUM:
      return FarmsEthereumPriceHelper
    case ChainId.GOERLI:
      return FarmsGoerliPriceHelper
    case ChainId.BAOBAB:
      return FarmsBaobabPriceHelper
    case ChainId.KLAYTN:
      return FarmsKlaytnPriceHelper
    case ChainId.SEPOLIA:
      return FarmsSepoliaPriceHelper
    default:
      return []
  }
}

export const getPoolsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BSC:
      return PoolsBscPriceHelper
    case ChainId.BSC_TESTNET:
      return PoolsBscTestnetPriceHelper
    case ChainId.ETHEREUM:
      return PoolsEthereumPriceHelper
    case ChainId.GOERLI:
      return PoolsGoerliPriceHelper
    case ChainId.BAOBAB:
      return PoolsBaobabPriceHelper
    case ChainId.KLAYTN:
      return PoolsKlaytnPriceHelper
    case ChainId.SEPOLIA:
      return PoolsSepoliaPriceHelper
    default:
      return []
  }
}
