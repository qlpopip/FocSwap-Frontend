import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useTranslation } from '@pancakeswap/localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import styled, { css } from 'styled-components'
import { Price } from '../../../../packages/swap-sdk/src/entities'

const MobileFlex = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  margin: 4rem 0;
  justify-content: center;

  ${css`
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  `}
`

const ResponsiveFlex = styled.div`
  display: flex;
  flex-direction: row;
  ${css`
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  `}
`

const StyledSpan24 = styled.span`
  text-align: center;
  color: #17022d;
  font-size: 24px;
  font-weight: 600;
`

const StyledSpan = styled.span`
  text-align: center;
  color: #f0aa1e;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
`

const GridDiv = styled.div`
  border-radius: 10px;
  display: grid;
  height: -webkit-fill-available;
  padding: 1rem;
  gap: 1rem;
  justify-items: center;

  ${css`
    @media screen and (max-width: 768px) {
      height: fit-content;
    }
  `}
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const StyledFlex = styled(Flex)`
  ${css`
    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column-reverse;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      height: 60vw;
      width: 100%;
    }

    @media screen and (min-width: 1025px) {
      height: 70%;
      width: 100%;
    }
  `}
`

const formatMarketCap = (marketCap: number) => {
  const suffixes = ['', 'K', 'M', 'B', 'T']
  const suffixNum = Math.floor(('' + marketCap).length / 3)
  let shortValue: number | string = parseFloat(
    (suffixNum !== 0 ? marketCap / 1000 ** suffixNum : marketCap).toPrecision(2),
  )
  if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(2)
  return shortValue + ' ' + suffixes[suffixNum]
}

const ConnectWithUs = () => {
  const { t } = useTranslation()
  const [totalSupply, setTotalSupply] = useState<number>(0)
  const [circulatingSupply, setCirculatingSupply] = useState<number>(0)
  const [marketCap, setMarketCap] = useState<number>(0)
  const [tokenBurn, setTokenBurn] = useState<number>(0)
  const [currentEmissions, setCurrentEmissions] = useState<number>(0)
  const price = usePriceCakeBusd()

  useEffect(() => {
    // Fetch data
    const fetchStats = async () => {
      const totalSupply_ = 10000000000
      const tokenBurn_ = 0 // fetch from contract
      const circulatingSupply_ = 10000000000 - tokenBurn
      const marketCap_ = parseInt(price.multipliedBy(totalSupply_).toFixed(0))
      const curentEmissions_ = 0 // fetch from contract
      setTotalSupply(totalSupply_)
      setCirculatingSupply(circulatingSupply_)
      setMarketCap(marketCap_)
      setTokenBurn(tokenBurn_)
      setCurrentEmissions(curentEmissions_)
    }

    fetchStats()
  }, [price])

  return (
    <>
      <BgWrapper>{/* <InnerWrapper>{<SlideSvgLight width="100%" />}</InnerWrapper> */}</BgWrapper>
      <StyledFlex
        flex={[null, null, null, '1']}
        mb={['24px', null, null, '0']}
        position="relative"
        alignItems="center" // Flex 컨테이너의 아이템을 수직 가운데 정렬
        justifyContent="center"
      >
        <Flex position="relative" flexDirection="column" justifyContent="center" width="100%" height="100%">
          <Heading scale="xl" color="#17022d" mb="24px" width="100%" textAlign="center">
            {t('Connect with Us')}
          </Heading>
          <Heading scale="md" mb="24px" width="100%" textAlign="center" color="#6234b8">
            {t(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            )}
          </Heading>
        </Flex>
      </StyledFlex>
      <Flex alignItems="center" justifyContent="center">
        <Button
          variant="secondary"
          onClick={() => {
            window.open('https://web.focad.ph/', '_blank')
          }}
        >
          {t('Connect')}
        </Button>
      </Flex>
      <MobileFlex>
        <ResponsiveFlex>
          <GridDiv>
            <StyledSpan24>{t('Circulating Supply')}</StyledSpan24>
            <StyledSpan>{circulatingSupply.toLocaleString()}</StyledSpan>
          </GridDiv>

          <GridDiv>
            <StyledSpan24>{t('Total Supply')}</StyledSpan24>
            <StyledSpan>{totalSupply.toLocaleString()}</StyledSpan>
          </GridDiv>

          <GridDiv>
            <StyledSpan24>{t('Market Cap')}</StyledSpan24>
            <StyledSpan>${formatMarketCap(marketCap)}</StyledSpan>
          </GridDiv>

          <GridDiv>
            <StyledSpan24>{t('Token Burn')}</StyledSpan24>
            <StyledSpan>{tokenBurn.toLocaleString()}</StyledSpan>
          </GridDiv>

          <GridDiv>
            <StyledSpan24>{t('Current Emissions')}</StyledSpan24>
            <StyledSpan>{currentEmissions.toLocaleString()}</StyledSpan>
          </GridDiv>
        </ResponsiveFlex>
      </MobileFlex>
      <div style={{ display: 'grid', justifyItems: 'center' }}>
        <img src="/images/mobile__trio.svg" alt="mobile__trio" />
      </div>
    </>
  )
}

export default ConnectWithUs
