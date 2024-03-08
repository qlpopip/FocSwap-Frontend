import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { OuterWedgeWrapper, InnerWedgeWrapper, WedgeBottomLeft } from './components/WedgeSvgs'
import Hero from './components/Hero'
import About from './components/About'
import Point from './components/Point'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />

      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="linear-gradient(180deg, #ffffff 50%, #0172bd 100%)"
        index={1}
        hasCurvedDivider={false}
      >
        <Hero />
      </StyledHeroSection>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#ffffff"
        index={2}
        hasCurvedDivider={false}
      >
        {/* <OuterWedgeWrapper>
          <InnerWedgeWrapper width="100%" top fill="#05080a">
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper> */}
        <Point />
      </StyledHeroSection>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%', height: '80%', display: 'flex', alignItems: 'center' } }}
        background="linear-gradient(180deg,#6fb6f1 0%,#eaf2f6 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <div style={{ zIndex: '1', position: 'absolute', top: '-18%', right: '0%' }}>
          <img src="/images/map.png" alt="map" width={200} />
        </div>

        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="100%" top fill="#72b8f2">
            <WedgeBottomLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <About />
      </StyledHeroSection>
    </>
  )
}

export default Home
