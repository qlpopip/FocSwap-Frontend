import { Flex, UserMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

interface WalletUserMenuItemProps {
  isWrongNetwork: boolean
  onPresentWalletModal: () => void
}

const WalletUserMenuItem: React.FC<React.PropsWithChildren<WalletUserMenuItemProps>> = ({
  isWrongNetwork,
  onPresentWalletModal,
}) => {
  const { t } = useTranslation()

  return (
    <UserMenuItem as="button" onClick={onPresentWalletModal}>
      <Flex alignItems="center" justifyContent="space-between" width="100%">
        {t('Wallet')}
        {/* {hasLowBnbBalance && !isWrongNetwork && <WarningIcon color="warning" width="24px" />}
        {isWrongNetwork && <WarningIcon color="failure" width="24px" />} */}
      </Flex>
    </UserMenuItem>
  )
}

export default WalletUserMenuItem
