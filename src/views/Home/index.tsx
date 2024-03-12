import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { OuterWedgeWrapper, InnerWedgeWrapper, WedgeBottomLeft } from './components/WedgeSvgs'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/MetricsSection'
import ConnectWithUs from './components/ConnectWithUs'
import News from './components/News'
import Join from './components/Join'
import Favorite from './components/Favorite'
import Footer from './components/Footer'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%', height: '80vh' } }}
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
        <ConnectWithUs />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="radial-gradient(ellipse at 50% 55%, rgba(255, 255, 255, 0.2) 30%, #cc00ff 60%)"
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
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#FFF"
        containerProps={{
          id: 'home-5',
        }}
        index={6}
        paddingBottom="0"
        hasCurvedDivider={false}
      >
        <News />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%', height: '66vh' } }}
        background="#FFF"
        containerProps={{
          id: 'home-6',
        }}
        index={7}
        paddingBottom="0"
        hasCurvedDivider={false}
      >
        <Favorite />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%', marginBottom: '2rem' } }}
        background="#17022d"
        containerProps={{
          id: 'home-7',
        }}
        index={8}
        paddingBottom="0"
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}

export default Home
