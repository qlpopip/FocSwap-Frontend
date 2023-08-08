import { Box, Button, Flex, InjectedModalProps, LinkExternal, Message, Skeleton, Text } from '@pancakeswap/uikit'
import Image from 'next/future/image'
import { ChainId } from '@pancakeswap/sdk'
import { FetchStatus } from 'config/constants/types'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from '@pancakeswap/localization'
import useAuth from 'hooks/useAuth'
import useNativeCurrency from 'hooks/useNativeCurrency'
import { useGetCakeBalance } from 'hooks/useTokenBalance'
import { ChainLogo } from 'components/Logo/ChainLogo'

import { getBlockExploreLink, getBlockExploreName } from 'utils'
import { formatBigNumber } from 'utils/formatBalance'
import { useBalance } from 'wagmi'
import CopyAddress from './CopyAddress'

interface WalletInfoProps {
  hasLowNativeBalance: boolean
  onDismiss: InjectedModalProps['onDismiss']
}

const WalletInfo: React.FC<WalletInfoProps> = ({ hasLowNativeBalance, onDismiss }) => {
  const { t } = useTranslation()
  const { account, chainId } = useActiveWeb3React()
  const { data, isFetched } = useBalance({ addressOrName: account })
  const native = useNativeCurrency()
  const { balance: cakeBalance, fetchStatus: cakeFetchStatus } = useGetCakeBalance()
  const { logout } = useAuth()

  const handleLogout = () => {
    onDismiss?.()
    logout()
  }

  const isBSC = native.chainId === ChainId.BSC

  return (
    <>
      <Text color="secondary" fontSize="12px" textTransform="uppercase" fontWeight="bold" mb="8px">
        {t('Your Address')}
      </Text>
      <CopyAddress account={account} mb="24px" />
      {hasLowNativeBalance && (
        <Message variant="warning" mb="24px">
          <Box>
            <Text fontWeight="bold">
              {t('%currency% Balance Low', {
                currency: native.symbol,
              })}
            </Text>
            <Text as="p">
              {t('You need %currency% for transaction fees.', {
                currency: native.symbol,
              })}
            </Text>
          </Box>
        </Message>
      )}
      <Flex alignItems="center" justifyContent="space-between">
        <Flex>
          {!isBSC && <ChainLogo chainId={native.chainId} />}
          <Text ml={isBSC ? 0 : '8px'} color="textSubtle">
            {native.symbol}
          </Text>
        </Flex>
        {!isFetched ? <Skeleton height="22px" width="60px" /> : <Text>{formatBigNumber(data.value, 6)}</Text>}
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="24px" mt="12px">
        <Flex alignItems="center">
          {!isBSC && (
            <Image
              src="/images/1001/tokens/0x90f193b165159345E0E61703Eb6A25480213480f.png"
              width={26}
              height={26}
              unoptimized
              alt="odi"
            />
          )}
          <Text ml={isBSC ? 0 : '8px'} color="textSubtle">
            ODI
          </Text>
        </Flex>
        {cakeFetchStatus !== FetchStatus.Fetched ? (
          <Skeleton height="22px" width="60px" />
        ) : (
          <Text>{formatBigNumber(cakeBalance, 3)}</Text>
        )}
      </Flex>
      <Flex alignItems="center" justifyContent="end" mb="24px">
        <LinkExternal href={getBlockExploreLink(account, 'address', chainId)}>
          {t('View on %site%', {
            site: getBlockExploreName(chainId),
          })}
        </LinkExternal>
      </Flex>
      <Button variant="secondary" width="100%" onClick={handleLogout}>
        {t('Disconnect Wallet')}
      </Button>
    </>
  )
}

export default WalletInfo
