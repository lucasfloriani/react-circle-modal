import React, { MouseEvent } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  classNames?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({ children, classNames, ...props }) => {
  return (
    <button className={clsx("bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded", classNames)} {...props}>
      {children}
    </button>
  )
}

export default Button
