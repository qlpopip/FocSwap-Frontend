import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import styled, { keyframes, css } from 'styled-components'
import { SlideSvgLight } from './SlideSvg'
import CompositeImage, { CompositeImageProps } from './CompositeImage'

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const SocialLogoGroups = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-contents: space-between;
  margin: 2rem 0;
`

const Image: CompositeImageProps = {
  path: '/images/',
  attributes: [{ src: 'map', alt: 'MAP' }],
}

const Inner = styled.div`
  background-color: #faf2ff;
  border-radius: 40px;
  width: fit-content;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
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

const Join = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
        <img
          src="/images/socmed__left.svg"
          alt="socmed__left"
          style={{ position: 'absolute', bottom: '0', left: '0' }}
        />
        <img
          src="/images/socmed__right.svg"
          alt="socmed__right"
          style={{ position: 'absolute', bottom: '0', right: '0' }}
        />
        <img src="/images/star-blur.svg" alt="star-blur" style={{ position: 'absolute', top: '10%', left: '5%' }} />
        <img
          src="/images/youtube-blur.svg"
          alt="youtube-blur"
          style={{ position: 'absolute', top: '25%', right: '10%' }}
        />
      </BgWrapper>
      <StyledFlex
        flex={[null, null, null, '1']}
        mb={['24px', null, null, '0']}
        position="relative"
        alignItems="center" // Flex 컨테이너의 아이템을 수직 가운데 정렬
        justifyContent="center"
      >
        <Flex position="relative" flexDirection="column" justifyContent="center" width="100%" height="100%">
          <Heading scale="xl" color="#FFF" mb="24px" width="100%" textAlign="center">
            {t('Join our Community')}
          </Heading>
          <Heading scale="md" mb="24px" width="100%" textAlign="center" color="#FFF">
            {t(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            )}
          </Heading>
        </Flex>
      </StyledFlex>
      <Flex position="relative" flexDirection="column" justifyContent="center" alignItems="center">
        <Inner>
          <Heading scale="xl" color="#8c1fff" mb="24px" width="100%" textAlign="center">
            {t('Top tweet of the Week')}
          </Heading>
          <img
            src="/images/logo.png"
            width={50}
            alt="tweet-profile"
            style={{ boxShadow: '0 0 0 3px rgb(240, 169, 30)', borderRadius: '50%' }}
          />
          <Heading scale="lg" color="#8c1fff" mb="24px" width="100%" textAlign="center">
            {t("Everyone's Favorite")}
          </Heading>
          <span style={{ color: '#897796', fontSize: '22px', fontWeight: '300', lineHeight: '1.3', maxWidth: '700px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Aliquam ultrices sagittis orci a. Dignissim cras tincidunt lobortis feugiat vivamus at
            augue eget arcu. Adipiscing at in tellus integer feugiat scelerisque varius. Malesuada pellentesque elit
            eget gravida cum sociis natoque. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.
            Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse.
          </span>
          <Flex alignItems="center" justifyContent="center">
            <Button variant="secondary">{t('Web link')}</Button>
          </Flex>

          <SocialLogoGroups>
            <a href="/" target="_blank">
              <img src="/images/tiktok-icon.svg" alt="tiktok-icon" width={24} />
            </a>
            <a href="/" target="_blank">
              <img src="/images/twitter-icon.svg" alt="twitter" width={24} />
            </a>
            <a href="/" target="_blank">
              <img src="/images/instagram-icon.svg" alt="instagram" width={24} />
            </a>
            <a href="/" target="_blank">
              <img src="/images/facebook-icon.svg" alt="facebook" width={24} />
            </a>
            <a href="/" target="_blank">
              <img src="/images/email-icon.svg" alt="email" width={24} />
            </a>
            <a href="/" target="_blank">
              <img src="/images/discord-icon.svg" alt="discord" width={24} />
            </a>
          </SocialLogoGroups>
        </Inner>
      </Flex>
    </>
  )
}

export default Join
