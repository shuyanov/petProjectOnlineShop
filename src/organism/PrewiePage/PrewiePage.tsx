import React from 'react'
import { FlexContainer } from '../../common/FlexContainer/FlexContainer'
import style from './PrewiePage.module.scss'
import { CardBg } from '../../molecules/CardBg/CardBg'

export const PrewiePage = () => {
  return (
    <FlexContainer className={style.prewiePage}>
      <div className={style.test}>
        <CardBg />
      </div>
    </FlexContainer>
  )
}
