import { Flex } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import styled, { css } from 'styled-components'

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

const EcosystemLinks = [
  { title: 'Trade', link: '/trade' },
  { title: 'Earn', link: '/earn' },
  { title: 'Game', link: '/' },
  { title: 'NFT', link: '/' },
  { title: 'Tokenomics', link: '/' },
  { title: 'Litepaper', link: '/' },
  { title: 'Merchandise', link: '/' },
]

const DeveloperLinks = [
  { title: 'Github', link: '/' },
  { title: 'Bug Bounty', link: '/' },
  { title: 'Contributing', link: '/' },
]

const SupportLinks = [
  { title: 'Contract', link: '/' },
  { title: 'Troubleshooting', link: '/' },
  { title: 'Documentation', link: '/' },
]

const AboutLinks = [
  { title: 'Terms & Services', link: '/' },
  { title: 'Blog', link: '/' },
  { title: 'Brand & Assets', link: '/' },
  { title: 'Career', link: '/' },
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
              <Items>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Items>
            ))}
          </StyledGridContainer>
          <StyledGridContainer>
            <Title>{t('Developers')}</Title>
            {DeveloperLinks.map((item) => (
              <Items>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Items>
            ))}
          </StyledGridContainer>
          <StyledGridContainer>
            <Title>{t('Support')}</Title>
            {SupportLinks.map((item) => (
              <Items>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Items>
            ))}
          </StyledGridContainer>
          <StyledGridContainer>
            <Title>{t('About')}</Title>
            {AboutLinks.map((item) => (
              <Items>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Items>
            ))}
          </StyledGridContainer>
        </FooterFlex>
        <img src="/images/logo_foc.svg" alt="logo" width={150} style={{ margin: '1rem 0' }} />
      </StyledFlex>
    </>
  )
}

export default Footer
