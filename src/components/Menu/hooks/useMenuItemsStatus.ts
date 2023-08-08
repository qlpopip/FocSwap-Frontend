import { useMemo } from 'react'
import { useActiveIfoWithBlocks } from 'hooks/useActiveIfoWithBlocks'
import { useCurrentBlock } from 'state/block/hooks'
import { useCompetitionStatus } from './useCompetitionStatus'

export const useMenuItemsStatus = (): Record<string, string> => {
  const currentBlock = useCurrentBlock()
  const activeIfo = useActiveIfoWithBlocks()
  const competitionStatus = useCompetitionStatus()

  return useMemo(() => {
    return {
      '/competition': competitionStatus,
    }
  }, [competitionStatus])
}
