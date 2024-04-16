import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { baseTestTokens, baseTokens } from '@pancakeswap/tokens'
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
      primarySrc: `/images/tokens/${baseTokens.foc.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  // 수정
  {
    sousId: 0,
    stakingToken: baseTokens.foc,
    earningToken: baseTokens.foc,
    contractAddress: {
      56: '',
      2021: '',
      84532: '',
      8453: '0x1eC6691bF64B946Ae7d9a657Ac4001e1Ca4Fe3C4',
    },
    poolCategory: PoolCategory.COMMUNITY,
    tokenPerBlock: '1',
    isFinished: false,
  },
  // {
  //   sousId: 0,
  //   stakingToken: baseTestTokens.foc,
  //   earningToken: baseTestTokens.foc,
  //   contractAddress: {
  //     56: '',
  //     2021: '',
  //     84532: '0xf51Ab528017C3b999b5b0Fd00c9834832B192946',
  //     8453: '',
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
