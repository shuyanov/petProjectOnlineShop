import React, { PropsWithChildren } from 'react'

import {
  ContainerWidthType,
  ContainerMaxWidth,
} from '../Types/ContainerWidthTypes'

type FlexContainerProps = {
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  flexDirection?: 'column' | 'row'
  alignItems?: string
  gap?: number
  width?: number
  height?: number | string
  justifyContent?: string
  position?: 'absolute' | 'relative' | 'fixed' | 'sticky'
  top?: number | 0
  bottom?: number | 'auto'
  className?: string
  type?: ContainerWidthType
  zIndex?: number | 'auto'
}

export const FlexContainer: React.FC<PropsWithChildren<FlexContainerProps>> = ({
  flexDirection,
  flexWrap,
  alignItems,
  gap,
  height,
  justifyContent,
  children,
  position,
  top,
  type,
  className,
  bottom,
  zIndex,
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: flexDirection || 'row',
        flexWrap: flexWrap || 'nowrap',
        alignItems: alignItems || 'flex-start',
        gap: gap || 0,
        maxWidth: type ? ContainerMaxWidth[type] : ContainerMaxWidth.fullWidth,
        height: height || '100%',
        justifyContent: justifyContent || 'flex-start',
        position: position || 'static',
        top: top || 0,
        bottom: bottom || 0,
        zIndex: zIndex || 'auto',
      }}
    >
      {children}
    </div>
  )
}
