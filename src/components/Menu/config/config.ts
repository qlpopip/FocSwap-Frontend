import { MenuItemsType, SwapIcon, SwapFillIcon, EarnFillIcon, EarnIcon, ShopIcon, EventIcon } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: true,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      items: [
        {
          label: t('Farms'),
          href: '/farms',
        },
        {
          label: t('Pools'),
          href: '/pools',
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Shop'),
      href: 'https://foc-onlinestore.netlify.app/',
      icon: ShopIcon,
      fillIcon: ShopIcon,
      image: '/images/decorations/pe2.png',
      items: [
        {
          label: t('Online Store'),
          href: 'https://foc-onlinestore.netlify.app/',
        },
        {
          label: t('Events'),
          href: 'https://foc-onlinestore.netlify.app/event',
        },
      ],
    },
    // {
    //   label: t('Events'),
    //   href: 'https://foc-onlinestore.netlify.app/event',
    //   icon: EventIcon,
    //   fillIcon: EventIcon,
    //   image: '/images/decorations/pe2.png',
    //   items: [
    //     {
    //       label: t('Events'),
    //       href: 'https://foc-onlinestore.netlify.app/event',
    //     },
    //   ],
    // },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
