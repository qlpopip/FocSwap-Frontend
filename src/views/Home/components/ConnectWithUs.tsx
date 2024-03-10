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

  ${css`
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: '1rem', alignItems: 'center' }}>
          <div
            style={{
              borderRadius: '10px',
              display: 'grid',
              height: '-webkit-fill-available',
              padding: '1rem',
              gap: '1rem',
            }}
          >
            <span style={{ color: '#17022d', fontSize: '24px', fontWeight: '500' }}>Circulating Supply</span>
            <span style={{ color: '#f0aa1e', fontSize: '24px', fontWeight: '700', lineHeight: '1.3' }}>
              241,756,367
            </span>
          </div>

          <div
            style={{
              borderRadius: '10px',
              display: 'grid',
              height: '-webkit-fill-available',
              padding: '1rem',
              gap: '1rem',
            }}
          >
            <span style={{ color: '#17022d', fontSize: '24px', fontWeight: '500' }}>Total Supply</span>
            <span style={{ color: '#f0aa1e', fontSize: '24px', fontWeight: '700', lineHeight: '1.3' }}>
              241,756,367
            </span>
          </div>

          <div
            style={{
              borderRadius: '10px',
              display: 'grid',
              height: '-webkit-fill-available',
              padding: '1rem',
              gap: '1rem',
            }}
          >
            <span style={{ color: '#17022d', fontSize: '24px', fontWeight: '500' }}>Market Cap</span>
            <span style={{ color: '#f0aa1e', fontSize: '24px', fontWeight: '700', lineHeight: '1.3' }}>
              241,756,367
            </span>
          </div>

          <div
            style={{
              borderRadius: '10px',
              display: 'grid',
              height: '-webkit-fill-available',
              padding: '1rem',
              gap: '1rem',
            }}
          >
            <span style={{ color: '#17022d', fontSize: '24px', fontWeight: '500' }}>Token Burn</span>
            <span style={{ color: '#f0aa1e', fontSize: '24px', fontWeight: '700', lineHeight: '1.3' }}>
              241,756,367
            </span>
          </div>

          <div
            style={{
              borderRadius: '10px',
              display: 'grid',
              height: '-webkit-fill-available',
              padding: '1rem',
              gap: '1rem',
            }}
          >
            <span style={{ color: '#17022d', fontSize: '24px', fontWeight: '500' }}>Current Emissions</span>
            <span style={{ color: '#f0aa1e', fontSize: '24px', fontWeight: '700', lineHeight: '1.3' }}>
              241,756,367
            </span>
          </div>
        </div>
      </MobileFlex>
      <div style={{ display: 'grid', justifyItems: 'center' }}>
        <img src="/images/mobile__trio.svg" alt="mobile__trio" />
      </div>
    </>
  )
}

export default ConnectWithUs
