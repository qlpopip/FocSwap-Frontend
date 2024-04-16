import { ChainId } from '@pancakeswap/sdk'
import FarmsBscPriceHelper from './farms/56'
import FarmsBscTestnetPriceHelper from './farms/97'
import FarmsEthereumPriceHelper from './farms/1'
import FarmsGoerliPriceHelper from './farms/5'
import FarmsBaobabPriceHelper from './farms/1001'
import FarmsSaigonPriceHelper from './farms/2021'
import FarmsKlaytnPriceHelper from './farms/8217'
import FarmsBaseTestnetPriceHelper from './farms/84532'
import FarmsBasePriceHelper from './farms/8453'
import PoolsBscPriceHelper from './pools/56'
import PoolsBscTestnetPriceHelper from './pools/97'
import PoolsEthereumPriceHelper from './pools/1'
import PoolsGoerliPriceHelper from './pools/5'
import PoolsBaobabPriceHelper from './pools/1001'
import PoolsSaigonPriceHelper from './pools/2021'
import PoolsKlaytnPriceHelper from './pools/8217'
import PoolsBaseTestnetPriceHelper from './pools/84532'
import PoolsBasePriceHelper from './pools/8453'

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
    case ChainId.SAIGON:
      return FarmsSaigonPriceHelper
    case ChainId.BASE:
      return FarmsBasePriceHelper
    case ChainId.BASE_TESTNET:
      return FarmsBaseTestnetPriceHelper
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
    case ChainId.SAIGON:
      return PoolsSaigonPriceHelper
    case ChainId.BASE:
      return PoolsBasePriceHelper
    case ChainId.BASE_TESTNET:
      return PoolsBaseTestnetPriceHelper
    default:
      return []
  }
}
