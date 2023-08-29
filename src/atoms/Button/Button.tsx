import React from 'react'
import { ButtonProps } from '../atomsType'

export const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
  return <button onClick={onClick}>{title}</button>
}
