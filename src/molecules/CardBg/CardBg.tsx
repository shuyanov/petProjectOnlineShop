import React from 'react'
import { FlexContainer } from '../../common/FlexContainer/FlexContainer'
import { Button } from '../../atoms/Button/Button'
import style from './CardBg.module.scss'

export const CardBg = () => {
  return (
    <FlexContainer
      className={style.CardBg}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Button title={'Discovery our collection'}></Button>
    </FlexContainer>
  )
}
