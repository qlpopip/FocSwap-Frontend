import { Flex, Button } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import styled, { css } from 'styled-components'
import HomeIcon from '@mui/icons-material/Home'
import { socialLinks } from './Join'

const FooterFlex = styled.div`
  display: flex;
  gap: 4rem;

  ${css`
    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  `}
`

const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const Title = styled.span`
  font-size: 28px;
  font-weight: 600;
  color: #f0aa1e;
  ${css`
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  `}
`
const Items = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  text-align: left;

  ${css`
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  `}
`

const GridDiv = styled.div`
  display: grid;
  padding: 1rem;
  gap: 1rem;
  justify-items: center;
`

const SocialLogoGroups = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-contents: space-between;
  margin: 2rem 0;
  align-items: center;
`

const EcosystemLinks = [
  { title: 'Trade', link: '/swap', id: 1 },
  { title: 'Earn', link: '/earn', id: 2 },
  // { title: 'Tokenomics', link: '/', id: 3 },
  // { title: 'Litepaper', link: '/', id: 4 },
  { title: 'FOC Online Store', link: 'https://foc-onlinestore.netlify.app/', id: 3 },
  { title: 'FOC Reward', link: 'https://foc-onlinestore.netlify.app/my-points', id: 4 },
]

const DeveloperLinks = [
  { title: 'Github', link: '/', id: 1 },
  // { title: 'Bug Bounty', link: '/', id: 2 },
  // { title: 'Contributing', link: '/', id: 3 },
]

const SupportLinks = [
  { title: 'Contract', link: '/', id: 1 },
  // { title: 'Troubleshooting', link: '/', id: 2 },
  { title: 'Documentation', link: '/', id: 2 },
]

const AboutLinks = [
  { title: 'Terms & Services', link: '/', id: 1 },
  { title: 'Blog', link: '/', id: 2 },
  { title: 'Brand & Assets', link: '/', id: 3 },
  { title: 'Career', link: '/', id: 4 },
]

const StyledFlex = styled(Flex)`
  justify-content: space-around;
  gap: 1rem;
  ${css`
    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column-reverse;
      align-items: center;
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

const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <StyledFlex
        flex={[null, null, null, '1']}
        mb={['24px', null, null, '0']}
        position="relative"
        alignItems="center" // Flex 컨테이너의 아이템을 수직 가운데 정렬
        justifyContent="center"
      >
        <FooterFlex>
          <StyledGridContainer>
            <Title>{t('Ecosystem')}</Title>
            {EcosystemLinks.map((item) => (
              <Items key={item.id}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Items>
            ))}
          </StyledGridContainer>
          <StyledGridContainer>
            <Title>{t('Developers')}</Title>
            {DeveloperLinks.map((item) => (
              <Items key={item.id}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Items>
            ))}
          </StyledGridContainer>
          <StyledGridContainer>
            <Title>{t('Support')}</Title>
            {SupportLinks.map((item) => (
              <Items key={item.id}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Items>
            ))}
          </StyledGridContainer>
          <StyledGridContainer>
            <Title>{t('About')}</Title>
            {AboutLinks.map((item) => (
              <Items key={item.id}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Items>
            ))}
          </StyledGridContainer>
        </FooterFlex>
        <GridDiv>
          <img src="/images/logo_foc.svg" alt="logo" width={150} style={{ margin: '1rem 0' }} />
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
        </GridDiv>
      </StyledFlex>
    </>
  )
}

export default Footer
