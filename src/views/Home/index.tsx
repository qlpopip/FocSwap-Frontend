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
import Stats from './components/MetricsSection'
import ConnectWithUs from './components/ConnectWithUs'
import Join from './components/Join'

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
        innerProps={{ style: { margin: '0', width: '100%', height: '80vh' } }}
        // background="linear-gradient(180deg, #ffffff 50%, #0172bd 100%)"
        index={1}
        hasCurvedDivider={false}
      >
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="linear-gradient(180deg, #ffffff 30%, #ffe587 100%)"
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Stats />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="linear-gradient(180deg, #ffffff 5%, #ffebcd 20%, #ffa621 100%)"
        containerProps={{
          id: 'home-2',
        }}
        bottomshadow="20px 25px 0px #cc01ff, -20px 25px 0px 0px #cc01ff"
        borderRadius="0 0 20% 20%"
        margin="0 0 2.5rem 0"
        index={3}
        hasCurvedDivider={false}
      >
        <About />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%', paddingBottom: '0' } }}
        background="#FFF"
        containerProps={{
          id: 'home-3',
        }}
        index={4}
        paddingBottom="0"
        hasCurvedDivider={false}
      >
        {/* <OuterWedgeWrapper>
          <InnerWedgeWrapper width="100%" top fill="#cc00ff">
            <WedgeBottomLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper> */}
        <ConnectWithUs />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%', paddingBottom: '0' } }}
        background="radial-gradient(ellipse at 50% 60%, rgba(255, 255, 255, 0.2) 30%, #cc00ff 60%)"
        containerProps={{
          id: 'home-4',
        }}
        index={5}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="100%" top fill="#cc00ff">
            <WedgeBottomLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <Join />
      </PageSection>
      {/* <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%', height: '100vh', display: 'flex', alignItems: 'center' } }}
        background="linear-gradient(180deg,#6fb6f1 0%,#eaf2f6 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="100%" top fill="#72b8f2">
            <WedgeBottomLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <About />
      </StyledHeroSection> */}
    </>
  )
}

export default Home
