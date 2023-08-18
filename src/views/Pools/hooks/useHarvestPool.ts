import { useCallback } from 'react'
import { BIG_ZERO } from 'utils/bigNumber'
import getGasPrice from 'utils/getGasPrice'
import { useSousChef, useVaultPoolContract } from 'hooks/useContract'
import { BOOSTED_FARM_GAS_LIMIT } from 'config'
import { VaultKey } from 'state/types'

const options = {
  gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

const harvestPool = async (sousChefContract) => {
  const gasPrice = getGasPrice()
  return sousChefContract.deposit('0', { ...options, gasPrice })
}

const harvestPoolBnb = async (sousChefContract) => {
  const gasPrice = getGasPrice()
  return sousChefContract.deposit({ ...options, value: BIG_ZERO, gasPrice })
}

const harvestVault = async (VaultContract) => {
  const gasPrice = getGasPrice()
  return VaultContract.harvest({ ...options, gasPrice })
}

const useHarvestPool = (sousId, isUsingBnb = false) => {
  const sousChefContract = useSousChef(sousId);
  const VaultContract = useVaultPoolContract(VaultKey.CakeVault);

  const handleVault = useCallback(async () => {
    return harvestVault(VaultContract);
  }, [VaultContract]);

  const handleHarvest = useCallback(async () => {
    if (isUsingBnb) {
      return harvestPoolBnb(sousChefContract);
    }
    return harvestPool(sousChefContract);
  }, [isUsingBnb, sousChefContract]);

  return sousId === 0 ? { onReward: handleVault } : { onReward: handleHarvest };
};


export default useHarvestPool
