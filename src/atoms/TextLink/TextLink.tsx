import React from 'react'
import { TextLinkType } from '../atomsType'
import style from './TextLink.module.scss'

export const TextLink: React.FC<TextLinkType> = ({ href, text }) => {
  return (
    <a className={style.TextLink} href={href}>
      {text}
    </a>
  )
}
