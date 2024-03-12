import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { ChainId } from '@pancakeswap/sdk'
import { useMemo } from 'react'
import { useNetwork } from 'wagmi'
import { atom, useAtom } from 'jotai'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export const hideWrongNetworkModalAtom = atom(false)

export const NetworkModal = ({ pageSupportedChains = SUPPORT_ONLY_BSC }: { pageSupportedChains?: number[] }) => {
  // if (isPageNotSupported && isBNBOnlyPage) {
  //   return (
  //     <ModalV2 isOpen closeOnOverlayClick={false}>
  //       <PageNetworkSupportModal />
  //     </ModalV2>
  //   )
  // }

  // if ((chain?.unsupported ?? false) || isPageNotSupported) {
  //   return (
  //     <ModalV2 isOpen closeOnOverlayClick={false}>
  //       <UnsupportedNetworkModal />
  //     </ModalV2>
  //   )
  // }

  // if (isWrongNetwork && !dismissWrongNetwork) {
  //   const currentChain = chains.find((c) => c.id === chainId)
  //   if (!currentChain) return null
  //   return (
  //     <ModalV2 isOpen={isWrongNetwork} closeOnOverlayClick onDismiss={() => setDismissWrongNetwork(true)}>
  //       <WrongNetworkModal currentChain={currentChain} onDismiss={() => setDismissWrongNetwork(true)} />
  //     </ModalV2>
  //   )
  // }

  return null
}
