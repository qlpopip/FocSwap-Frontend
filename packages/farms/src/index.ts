import { MultiCallV2 } from '@pancakeswap/multicall'
import { farmV2FetchFarms, fetchFarmsParams, fetchMasterChefV2Data as _fetchMasterChefV2Data } from './fetchFarms'

export const masterChefAddresses = {
  97: '0x03a416BAEA3c9aFA984489cAAD1620194fD7CdE2',
  56: '0x03a416BAEA3c9aFA984489cAAD1620194fD7CdE2',
  5: '0x03a416BAEA3c9aFA984489cAAD1620194fD7CdE2',
  1001: '0x03a416BAEA3c9aFA984489cAAD1620194fD7CdE2'
}

export const nonBSCVaultAddresses = {
  5: '0x03a416BAEA3c9aFA984489cAAD1620194fD7CdE2',
  1001: '0x03a416BAEA3c9aFA984489cAAD1620194fD7CdE2'
}

const supportedChainId = [5, 56, 97, 1001]

export function createFarmFetcher(multicall: MultiCallV2) {
  const fetchFarms = (params: Omit<fetchFarmsParams, 'masterChefAddresses' | 'multicall'>) => {
    return farmV2FetchFarms({ ...params, multicall, masterChefAddresses })
  }
  return {
    fetchFarms,
    fetchMasterChefV2Data: (isTestnet: boolean) =>
      _fetchMasterChefV2Data({ isTestnet, masterChefAddresses, multicall }),
    isChainSupported: (chainId: number) => supportedChainId.includes(chainId),
  }
}

export * from './types'
export * from './farmsPriceHelpers'
