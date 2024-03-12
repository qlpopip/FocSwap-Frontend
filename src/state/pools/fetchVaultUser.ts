import BigNumber from 'bignumber.js'
import { SerializedVaultUser } from 'state/types'
import { getCakeVaultAddress } from 'utils/addressHelpers'
import cakeVaultAbi from 'config/abi/cakeVault.json'
import { multicallv2 } from 'utils/multicall'
import { getCakeFlexibleSideVaultV2Contract } from '../../utils/contractHelpers'

const cakeVaultAddress = getCakeVaultAddress()
const flexibleSideVaultContract = getCakeFlexibleSideVaultV2Contract()

export const fetchVaultUser = async (account: string): Promise<SerializedVaultUser> => {
  try {
    const calls = ['userInfo'].map((method) => ({
      address: cakeVaultAddress,
      name: method,
      params: [account],
    }))
    const [userContractResponse] = await multicallv2({
      abi: cakeVaultAbi,
      calls,
    })
    // const calls_ = ['performanceFee'].map((method) => ({
    //   address: cakeVaultAddress,
    //   name: method,
    // }))
    // const [currentPerformanceFee] = await multicallv2({
    //   abi: cakeVaultAbi,
    //   calls: calls_,
    // })
    // console.log(userContractResponse)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      cakeAtLastUserAction: new BigNumber(userContractResponse.cakeAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      cakeAtLastUserAction: null,
    }
  }
}

export const fetchFlexibleSideVaultUser = async (account: string): Promise<SerializedVaultUser> => {
  try {
    const userContractResponse = await flexibleSideVaultContract.userInfo(account)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      cakeAtLastUserAction: new BigNumber(userContractResponse.cakeAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      cakeAtLastUserAction: null,
    }
  }
}
