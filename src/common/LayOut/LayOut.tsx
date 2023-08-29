import React, { PropsWithChildren } from 'react'
import { FlexContainer } from '../FlexContainer/inedx'

const Header = ({ children }: PropsWithChildren<object>) => {
  return (
    <FlexContainer
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height={75}
      zIndex={0}
      width={'100%'}
    >
      {children}
    </FlexContainer>
  )
}

const Body = ({ children }: PropsWithChildren<object>) => {
  return <FlexContainer justifyContent="center">{children}</FlexContainer>
}

const Footer = ({ children }: PropsWithChildren<object>) => {
  return (
    <FlexContainer
      flexDirection="row"
      top={0}
      position="sticky"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </FlexContainer>
  )
}

export const Layout = ({ children }: PropsWithChildren<object>) => {
  return <FlexContainer flexDirection="column">{children}</FlexContainer>
}

Layout.Header = Header
Layout.Body = Body
Layout.Footer = Footer
