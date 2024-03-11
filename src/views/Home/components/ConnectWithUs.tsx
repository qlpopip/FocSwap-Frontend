import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import styled, { keyframes, css } from 'styled-components'
import { SlideSvgLight } from './SlideSvg'
import CompositeImage, { CompositeImageProps } from './CompositeImage'

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

const Image: CompositeImageProps = {
  path: '/images/',
  attributes: [{ src: 'map', alt: 'MAP' }],
}

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

const ConnectWithUs = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

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
        <Button variant="secondary">{t('Connect')}</Button>
      </Flex>
      <MobileFlex>
        <ResponsiveFlex>
          <GridDiv>
            <StyledSpan24>Circulating Supply</StyledSpan24>
            <StyledSpan>241,756,367</StyledSpan>
          </GridDiv>

          <GridDiv>
            <StyledSpan24>Total Supply</StyledSpan24>
            <StyledSpan>241,756,367</StyledSpan>
          </GridDiv>

          <GridDiv>
            <StyledSpan24>Market Cap</StyledSpan24>
            <StyledSpan>241,756,367</StyledSpan>
          </GridDiv>

          <GridDiv>
            <StyledSpan24>Token Burn</StyledSpan24>
            <StyledSpan>241,756,367</StyledSpan>
          </GridDiv>

          <GridDiv>
            <StyledSpan24>Current Emissions</StyledSpan24>
            <StyledSpan>241,756,367</StyledSpan>
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
