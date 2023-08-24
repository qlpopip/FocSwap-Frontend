import { MultiCallV2 } from '@pancakeswap/multicall'
import { farmV2FetchFarms, fetchFarmsParams, fetchMasterChefV2Data as _fetchMasterChefV2Data } from './fetchFarms'

export const masterChefAddresses = {
  97: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
  56: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
  5: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
  1001: '0xF0681e41ee14467FF719BF86677c9F7246CA97FB',
  8217: '0xF90F20175539218044277D2862D301CF5ffaf190'
}
//수정
export const nonBSCVaultAddresses = {
  5: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
  1001: '0xF0681e41ee14467FF719BF86677c9F7246CA97FB',
  8217: '0xF90F20175539218044277D2862D301CF5ffaf190',
}

const supportedChainId = [5, 56, 97, 1001, 8217]

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
