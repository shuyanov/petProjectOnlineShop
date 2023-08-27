import React from 'react'
import icon from '../../../publick/icon.svg'
import { FlexContainer } from '../../common/FlexContainer/FlexContainer'
import style from './LogoImg.module.scss'

export const LogoImg = () => {
  return (
    <FlexContainer alignItems={'center'} gap={6}>
      <img src={icon} alt="" />
      <h1 className={style.Text}>SafeTime</h1>
    </FlexContainer>
  )
}
