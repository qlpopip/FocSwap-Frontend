import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { baobabTokens, bscTokens} from '@pancakeswap/tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake ODI</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible CAKE</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  // 수정
  {
    sousId: 0,
    stakingToken: baobabTokens.odi,
    earningToken: baobabTokens.odi,
    contractAddress: {
      5: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
      56: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
      97: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
      1001: '0xdd195cE84Dd35b1615e73b1259DA88A03372E4fE',
    },
    poolCategory: PoolCategory.COMMUNITY,
    tokenPerBlock: '1',
    isFinished: false,
  },
   {
     sousId: 1,
     stakingToken: baobabTokens.lcg,
     earningToken: baobabTokens.odi,
     contractAddress: {
       5: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
       56: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
       97: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
       1001: '0x9674694fcaac5053dc3eb2808bb70be243700576',
     },
     poolCategory: PoolCategory.COMMUNITY,
     tokenPerBlock: '1',
     isFinished: false,
   },
   {
    sousId: 2,
    stakingToken: baobabTokens.lcg,
    earningToken: baobabTokens.odi,
    contractAddress: {
      5: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
      56: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
      97: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
      1001: '0x3f03ddcfa062765efe1067bbd9c1629914c67091',
    },
    poolCategory: PoolCategory.COMMUNITY,
    tokenPerBlock: '1',
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: baobabTokens.aaa,
    earningToken: baobabTokens.odi,
    contractAddress: {
      5: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
      56: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
      97: '0xE641b73948FeBbD349C9Fd21C110eA9Dd384179C',
      1001: '0x6a6cfa3b4c228e6985cfe20b3cd8445af70fd669',
    },
    poolCategory: PoolCategory.COMMUNITY,
    tokenPerBlock: '1',
    isFinished: false,
  },
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
