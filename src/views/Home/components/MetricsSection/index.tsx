import { Heading, Flex, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import styled, { css } from 'styled-components'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'

const ResponsiveRouter = styled.img`
  position: relative;
  right: -65%;
  bottom: -4rem;

  ${css`
    @media screen and (max-width: 768px) {
      right: 0;
    }
  `}
`

const ResponsiveCoinLarge = styled.img`
  position: relative;
  left: -75%;
  top: 2rem;

  ${css`
    @media screen and (max-width: 768px) {
      display: none;
    }
  `}
`

const ResponsiveCoinSmall = styled.img`
  position: relative;
  left: -100%;
  top: -25rem;

  ${css`
    @media screen and (max-width: 768px) {
      left: -20%;
      top: -30rem;
    }
  `}
`

const ResponsiveCoinMedium = styled.img`
  position: relative;
  right: -20%;
  bottom: 30rem;

  ${css`
    @media screen and (max-width: 768px) {
      right: -45%;
      bottom: 18rem;
    }
  `}
`

const Stats = () => {
  const { t } = useTranslation()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xl">
        {t(
          'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        )}
      </Heading>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard
          {...UsersCardData}
          mr={[null, null, null, '16px']}
          mb={['16px', null, null, '0']}
          borderColor="none"
          background="none !important"
        >
          <StatCardContent
            headingText={t('Total Users: %users%', { users })}
            bodyText={t('in the last 30 days')}
            highlightColor="#f26622"
          />
        </IconCard>
        <IconCard
          {...TradesCardData}
          mr={[null, null, null, '16px']}
          mb={['16px', null, null, '0']}
          borderColor="none"
          background="none !important"
        >
          <StatCardContent
            headingText={t('Total Trades: %trades% ', { trades })}
            bodyText={t('made in the last 30 days')}
            highlightColor="#f26622"
          />
        </IconCard>
        <IconCard {...StakedCardData} borderColor="none" background="none !important">
          <StatCardContent
            headingText={t('Total Staked: $%tvl% ', { tvl: tvlString })}
            bodyText={t('Total Value Locked')}
            highlightColor="#f26622"
          />
        </IconCard>
      </Flex>
      <div style={{ position: 'relative' }}>
        <ResponsiveRouter src="/images/routers.svg" width={500} alt="routers" />
        <ResponsiveCoinLarge src="/images/coin-blur__large.svg" alt="coin-blure-large" />
        <ResponsiveCoinSmall src="/images/coin-blur__small.svg" alt="coin-blure-small" />
        <ResponsiveCoinMedium src="/images/coin-blur__medium.svg" alt="coin-blure-medium" />
      </div>
    </Flex>
  )
}

export default Stats
