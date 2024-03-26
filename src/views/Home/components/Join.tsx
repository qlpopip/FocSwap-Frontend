import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import styled, { css } from 'styled-components'
import HomeIcon from '@mui/icons-material/Home'

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
  align-items: center;
`

const Inner = styled.div`
  background-color: #faf2ff;
  border-radius: 40px;
  width: fit-content;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 2rem 0;
  width: 75%;

  ${css`
    @media screen and (max-width: 768px) {
      padding: 2rem;
      width: 100%;
    }
  `}
`

const ResponsiveInner = styled.div`
  background-color: #faf2ff;
  border-radius: 40px;
  width: fit-content;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  width: 75%;

  ${css`
    @media screen and (max-width: 768px) {
      padding: 2rem;
      flex-direction: column;
      width: 100%;
    }
  `}
`

const StyledGridContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`

const StyledSpan = styled.span`
  color: #897796;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.3;
  max-width: 700px;

  ${css`
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  `}
`

const StyledSpanBlack = styled.span`
  color: #000;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`

const StyledSpanYellowLarge = styled.span`
  color: #f0aa1e;
  font-weight: 900;
  font-size: 32px;
  text-align: center;
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

const StyledBlurImg = styled.img`
  position: absolute;
  top: 25%;
  right: 10%;

  ${css`
    @media screen and (max-width: 768px) {
      top: 5%;
      right: -8%;
    }
  `}
`

const StyledBlurImgStar = styled.img`
  position: absolute;
  top: 10%;
  left: 5%;

  ${css`
    @media screen and (max-width: 768px) {
      left: -10%;
    }
  `}
`

const Tweets = {
  link: 'https://twitter.com/focincofficial',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Adipiscing at in tellus integer feugiat scelerisque varius. Malesuada pellentesque elit eget gravida cum sociis natoque. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse.',
}

export const socialLinks = [
  {
    href: 'https://web.focad.ph/',
    icon: <HomeIcon style={{ color: '#a24bff', width: '26px', height: '26px' }} />,
  },
  {
    href: 'https://www.tiktok.com/@focinofficial',
    icon: <img src="/images/tiktok-icon.svg" alt="tiktok-icon" width={24} />,
  },
  {
    href: 'https://twitter.com/focincofficial?s=21',
    icon: <img src="/images/x-icon.svg" alt="twitter" width={24} />,
  },
  // {
  //   href: '/',
  //   icon: <img src="/images/instagram-icon.svg" alt="instagram" width={24} />,
  // },
  {
    href: 'https://www.facebook.com/profile.php?id=61556776132353',
    icon: <img src="/images/facebook-icon.svg" alt="facebook" width={24} />,
  },
  {
    href: 'https://discord.gg/wxk5FSWc',
    icon: <img src="/images/discord-icon.svg" alt="discord" width={24} />,
  },
]

const Join = () => {
  const { t } = useTranslation()

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
        <StyledBlurImgStar src="/images/star-blur.svg" alt="star-blur" />
        <StyledBlurImg src="/images/youtube-blur.svg" alt="youtube-blur" />
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
          <StyledSpan>{Tweets.content}</StyledSpan>
          <Flex alignItems="center" justifyContent="center">
            <Button
              variant="secondary"
              onClick={() => {
                window.open(Tweets.link, '_blank')
              }}
            >
              {t('Web link')}
            </Button>
          </Flex>

          <SocialLogoGroups>
            {socialLinks.map(({ href, icon }) => (
              <Button
                key={href}
                variant="secondary"
                style={{ border: '0', padding: '0' }}
                onClick={() => {
                  window.open(href, '_blank')
                }}
              >
                {icon}
              </Button>
            ))}
          </SocialLogoGroups>
        </Inner>
        <ResponsiveInner>
          <StyledGridContainer>
            <StyledSpanBlack>{t('Multilingual Communities')}</StyledSpanBlack>
            <StyledSpanYellowLarge>15+</StyledSpanYellowLarge>
          </StyledGridContainer>
          <StyledGridContainer>
            <StyledSpanBlack>{t('Community Members')}</StyledSpanBlack>
            <StyledSpanYellowLarge>2.0M+</StyledSpanYellowLarge>
          </StyledGridContainer>
          <StyledGridContainer>
            <StyledSpanBlack>{t('Community Ambassadors')}</StyledSpanBlack>
            <StyledSpanYellowLarge>35+</StyledSpanYellowLarge>
          </StyledGridContainer>
        </ResponsiveInner>
      </Flex>
    </>
  )
}

export default Join
