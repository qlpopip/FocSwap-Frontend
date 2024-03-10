import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import styled, { keyframes, css } from 'styled-components'
import { SlideSvgDark } from './SlideSvg'
import CompositeImage, { CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
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

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const starsImage: CompositeImageProps = {
  path: '/images/',
  attributes: [{ src: 'router-violet', alt: 'router-violet' }],
}

const StyledFlex = styled(Flex)`
  ${css`
    @media screen and (max-width: 768px) {
      height: 100vh;
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

const Point = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>{/* <InnerWrapper>{<SlideSvgDark width="100%" />}</InnerWrapper> */}</BgWrapper>
      <StyledFlex
        flex={[null, null, null, '1']}
        mb={['24px', null, null, '0']}
        position="relative"
        alignItems="center" // Flex 컨테이너의 아이템을 수직 가운데 정렬
        justifyContent="center"
      >
        <Flex position="relative" flexDirection="column" justifyContent="center" width="65%" height="100%">
          <Heading scale="xxl" color="#0171BD" mb="24px" width="100%" textAlign="left">
            {t('Reward Dashboard')}
          </Heading>
          <Heading scale="lg" mb="24px" width="100%" textAlign="left" color="#2f678d">
            {t('Manage your daily Check-in and Rewards from your own Dashboard')}
          </Heading>
          <Flex alignItems="center" justifyContent="left">
            <a href="/" target="_blank">
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Go to Dashboard')}</Button>
            </a>
          </Flex>
        </Flex>
        <CompositeImage {...starsImage} maxHeight="512px" />
      </StyledFlex>
    </>
  )
}

export default Point
