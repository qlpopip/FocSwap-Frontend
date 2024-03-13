import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from '@pancakeswap/localization'
import styled, { keyframes, css } from 'styled-components'

const Robot = styled.img`
  margin-top: 3rem;

  ${css`
    @media only screen and (max-width: 768px) {
      width: 242px;
    }
  `}
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
  background: url('/images/hero-background.png');
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledFlex = styled(Flex)`
  ${css`
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
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

  return (
    <>
      <BgWrapper />
      <StyledFlex
        flex={[null, null, null, '1']}
        mb={['24px', null, null, '0']}
        position="relative"
        alignItems="center" // Flex 컨테이너의 아이템을 수직 가운데 정렬
        justifyContent="center"
      >
        <Flex position="relative" flexDirection="column" justifyContent="center" width="100%" height="100%">
          <Heading
            scale="xxl"
            color="#FFF"
            mb="24px"
            width="100%"
            textAlign={window.innerWidth > 768 ? 'left' : 'center'}
          >
            {t('Trade Smarter with')}
          </Heading>
          <Heading
            scale="xxxl"
            color="#f0aa1e"
            mb="24px"
            width="100%"
            textAlign={window.innerWidth > 768 ? 'left' : 'center'}
          >
            {t('FocSwap')}
          </Heading>
          <Heading
            scale="md"
            mb="24px"
            width="100%"
            textAlign={window.innerWidth > 768 ? 'left' : 'center'}
            color="#FFF"
          >
            {t('Trade, earn, and own crypto on the all-in-one DEX')}
          </Heading>
          <Flex alignItems="center" justifyContent={window.innerWidth > 768 ? 'left' : 'center'}>
            {!account && <ConnectWalletButton mr="8px" />}
            <NextLinkFromReactRouter to="/swap">
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
            </NextLinkFromReactRouter>
          </Flex>
        </Flex>
        <Robot src="/images/robots.png" alt="robot" width={450} />
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
