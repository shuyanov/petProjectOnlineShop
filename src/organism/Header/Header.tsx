import React from 'react'
import { FlexContainer } from '../../common/FlexContainer/FlexContainer'
import styles from './Header.module.scss'
import { LogoImg } from '../../atoms/LogoImg/LogoImg'

import { TextLink } from '../../atoms/TextLink/TextLink'
import { ButtonIcon } from '../../atoms/ButtonIcon/ButtonIcon'

import profile from '../../../publick/Profile.svg'
import cart from '../../../publick/Cart.svg'

export const Header = () => {
  return (
    <FlexContainer className={styles.Header} alignItems={'center'}>
      <FlexContainer className={styles.Logo}>
        <LogoImg />
      </FlexContainer>
      <FlexContainer alignItems={'center'} justifyContent={'center'} gap={25}>
        <TextLink href={''} text={'Discovery'} />
        <TextLink href={''} text={'About'} />
        <TextLink href={''} text={'Contact us'} />
      </FlexContainer>
      <FlexContainer
        className={styles.buttons}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <ButtonIcon src={profile} />
        <ButtonIcon src={cart} />
      </FlexContainer>
    </FlexContainer>
  )
}
