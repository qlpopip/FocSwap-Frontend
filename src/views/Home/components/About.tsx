import { Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useTranslation } from '@pancakeswap/localization'
import styled, { css } from 'styled-components'

const MobileFlex = styled.div`
  position: relative;
  display: flex;
  margin: 4rem 0;
  justify-content: space-between;

  ${css`
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
      gap: 2rem;
    }
  `}
`

const StyledBox = styled.div`
  background-color: #ffefd6;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px 0px;
  display: grid;
  height: -webkit-fill-available;
  padding: 1rem;
  gap: 1rem;
`

const StyledSpan20 = styled.span`
  color: #623494;
  font-size: 20px;
  font-weight: 700;
`

const StyledSpan16 = styled.span`
  color: #8b767e;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.3;
`

const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  align-items: center;
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

const About = () => {
  const { t } = useTranslation()

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
            {t('Discover the')} <span style={{ color: '#f26622' }}>YES! FREE WIFI</span>
          </Heading>
          {/* <Heading scale="md" mb="24px" width="100%" textAlign="center" color="#2f678d">
            {t(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            )}
          </Heading> */}
        </Flex>
      </StyledFlex>
      <MobileFlex>
        <img src="/images/map__gradient.svg" alt="map" width={250} />
        <ResponsiveGrid>
          <StyledBox>
            <img src="/images/free-wifi.svg" alt="free-wifi" width={50} />
            <StyledSpan20>{t('Unlimited Access')}</StyledSpan20>
            <StyledSpan16>
              {t('Users enjoy unrestricted access to the internet without any data caps or limitations on usage')}
            </StyledSpan16>
          </StyledBox>

          <StyledBox>
            <img src="/images/privacy-protection.svg" alt="privacy-protection" width={50} />
            <StyledSpan20>{t('Privacy Protection')}</StyledSpan20>
            <StyledSpan16>
              {t('Implementing measures to safeguard personal information and ensure a secure browsing experience')}
            </StyledSpan16>
          </StyledBox>

          <StyledBox>
            <img src="/images/user-friendly.svg" alt="user-friendly" width={50} />
            <StyledSpan20>{t('User-Friendly Interface')}</StyledSpan20>
            <StyledSpan16>
              {t(
                'An intuitive interface that makes it easy for users to connect to the WiFi network and interact with advertisements',
              )}
            </StyledSpan16>
          </StyledBox>

          <StyledBox>
            <img src="/images/ad-based.svg" alt="ad-based" width={50} />
            <StyledSpan20>{t('Ad-Based Access')}</StyledSpan20>
            <StyledSpan16>
              {t(
                'Users access the service by watching shor advertisements, which serve as a form of currency for utilizing the WiFi',
              )}
            </StyledSpan16>
          </StyledBox>

          <StyledBox>
            <img src="/images/community-impact.svg" alt="community-impact" width={50} />
            <StyledSpan20>{t('Community Impact')}</StyledSpan20>
            <StyledSpan16>
              {t(
                'A positive impact on communities, empowering individuals with access to information, education, & oppertunities',
              )}
            </StyledSpan16>
          </StyledBox>
        </ResponsiveGrid>
      </MobileFlex>
    </>
  )
}

export default About
