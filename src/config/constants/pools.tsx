import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { bscTokens, saigonTokens } from '@pancakeswap/tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVault]: {
    name: <Trans>Stake FOC</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${saigonTokens.foc.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  // 수정
  {
    sousId: 0,
    stakingToken: saigonTokens.foc,
    earningToken: saigonTokens.foc,
    contractAddress: {
      56: '',
      2021: '0xA14a3778ED736965Fb47303bA1ac1bC57B2f5a61',
    },
    poolCategory: PoolCategory.COMMUNITY,
    tokenPerBlock: '1',
    isFinished: false,
  },
  // {
  //   sousId: 1,
  //   stakingToken: saigonTokens.foc,
  //   earningToken: saigonTokens.foc,
  //   contractAddress: {
  //     56: '',
  //     2021: '',
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   tokenPerBlock: '1',
  //   isFinished: false,
  // },
].map((p) => ({
  ...p,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [].map((p) => ({
  ...p,
  isFinished: true,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export default [...livePools, ...finishedPools]
