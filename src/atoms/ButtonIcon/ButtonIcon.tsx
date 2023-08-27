import React from 'react'
import { ButtonIconProps } from '../atomsType'
import style from './ButtonIcon.module.scss'

export const ButtonIcon: React.FC<ButtonIconProps> = ({ src, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      <img src={src} alt="" />
    </button>
  )
}
