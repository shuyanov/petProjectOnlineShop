import React, { PropsWithChildren } from 'react'

import { ContainerWidthType } from '../Types/ContainerWidthTypes'

type FlexContainerProps = {
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  flexDirection?: 'column' | 'row'
  alignItems?: string
  gap?: number
  width?: number | '100%'
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
  className,
  bottom,
  zIndex,
  width,
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
        height: height || '100%',
        width: width || '100%',
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
