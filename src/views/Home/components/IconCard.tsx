import { ReactNode } from 'react'
import styled from 'styled-components'
import { Card, CardBody, CardProps } from '@pancakeswap/uikit'

const StyledCard = styled(Card)<{ background: string; rotation?: string }>`
  height: fit-content;
  padding: 1px 1px 4px 1px;
  box-sizing: border-box;
  box-shadow: none;
  border: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

interface IconCardProps extends IconCardData, CardProps {
  children: ReactNode
}

export interface IconCardData {
  icon: ReactNode
  background?: string
  borderColor?: string
  rotation?: string
}

const IconCard: React.FC<React.PropsWithChildren<IconCardProps>> = ({
  icon,
  background,
  borderColor,
  rotation,
  children,
  ...props
}) => {
  return (
    <StyledCard background={background} borderBackground={borderColor} rotation={rotation} {...props}>
      <CardBody>{children}</CardBody>
    </StyledCard>
  )
}

export default IconCard
