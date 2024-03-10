import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import styled, { keyframes, css } from 'styled-components'
import { SlideSvgLight } from './SlideSvg'
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
  background: url('/images/hero-background.svg');
  background-size: cover;
  background-repeat: no-repeat;
`

const starsImage: CompositeImageProps = {
  path: '/images/',
  attributes: [{ src: 'robot', alt: '3D Robot' }],
}

const StyledFlex = styled(Flex)`
  ${css`
    align-items: flex-start;
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
      margin-top: 2rem;
    }
  `}
`

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
        {/* <InnerWrapper>
          <SlideSvgLight width="100%" />
        </InnerWrapper> */}
      </BgWrapper>
      <StyledFlex
        flex={[null, null, null, '1']}
        mb={['24px', null, null, '0']}
        position="relative"
        alignItems="center" // Flex 컨테이너의 아이템을 수직 가운데 정렬
        justifyContent="center"
      >
        <Flex position="relative" flexDirection="column" justifyContent="center" width="100%" height="100%">
          <Heading scale="xxl" color="#FFF" mb="24px" width="100%" textAlign="left">
            {t('Favorite DEX')}
          </Heading>
          <Heading scale="md" mb="24px" width="100%" textAlign="left" color="#FFF">
            {t('Trade, earn, and own crypto on the all-in-one DEX')}
          </Heading>
          <Flex alignItems="center" justifyContent="left">
            {!account && <ConnectWalletButton mr="8px" />}
            <NextLinkFromReactRouter to="/swap">
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
            </NextLinkFromReactRouter>
          </Flex>
        </Flex>
        <img src="/images/robot.png" alt="robot" width={450} style={{ marginTop: '3rem' }} />
        {/* <Flex
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
        </Flex> */}
      </StyledFlex>
    </>
  )
}

export default Hero
