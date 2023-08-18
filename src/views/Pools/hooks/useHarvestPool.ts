import { useCallback } from 'react'
import { BIG_ZERO } from 'utils/bigNumber'
import getGasPrice from 'utils/getGasPrice'
import { useSousChef, useVaultPoolContract } from 'hooks/useContract'
import { BOOSTED_FARM_GAS_LIMIT } from 'config'
import { CakeVault } from 'config/abi/types'
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
  let vaultkey;
  const sousChefContract = useSousChef(sousId)
  if(sousId === 0){
    vaultkey = VaultKey.CakeVault
    const VaultContract = useVaultPoolContract(vaultkey)
    const handleVault = useCallback(async () => {
      return harvestVault(VaultContract)
    },[VaultContract])

    return {onReward: handleVault}
  }
  const handleHarvest = useCallback(async () => {
    if (isUsingBnb) {
      return harvestPoolBnb(sousChefContract)
    }

    return harvestPool(sousChefContract)
  }, [isUsingBnb, sousChefContract])

  return { onReward: handleHarvest }
}

export default useHarvestPool
