import { Box, Button } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import { useTranslation } from '@pancakeswap/localization'

export const VaultStakeButtonGroup = ({
  onFlexibleClick,
  onLockedClick,
}: {
  onFlexibleClick: () => void
  onLockedClick: () => void
}) => {
  const { t } = useTranslation()
  return (
    <Box width="100%">
      <FlexGap gap="12px">
        <Button style={{ flex: 1 }} onClick={onFlexibleClick}>
          {t('Stake in Vault')}
        </Button>
        {/* {onLockedClick && (
          <Button style={{ flex: 1 }} onClick={onLockedClick}>
            {t('Locked')}
          </Button>
        )} */}
      </FlexGap>
      {/* {tooltipVisible && tooltip} */}
      {/* {onLockedClick && (
        <TooltipText mt="16px" small ref={targetRef}>
          {t('What’s the difference?')}
        </TooltipText>
      )} */}
    </Box>
  )
}
