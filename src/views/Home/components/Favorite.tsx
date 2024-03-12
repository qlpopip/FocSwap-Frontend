import React from 'react'
import { Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useTranslation } from '@pancakeswap/localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import styled, { css } from 'styled-components'

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

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
  background: url('/images/join-everyone-background.png');
  background-size: cover;
  background-repeat: no-repeat;
`

const Favorite = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <BgWrapper />
      <StyledFlex
        flex={[null, null, null, '1']}
        mb={['24px', null, null, '0']}
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Flex alignItems="center" justifyContent="center" flexDirection="column">
          <Heading scale="xl" color="#17022d" mb="24px" width="100%" textAlign="center">
            {t("Join Everyone's Favorite DEX")}
          </Heading>
          {!account && <ConnectWalletButton mr="8px" />}
        </Flex>
      </StyledFlex>
    </>
  )
}

export default Favorite
