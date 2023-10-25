import React from 'react'

type ButtonProps = {
  classname: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  color: 'red' | 'blue'
}

const Button = ({ children, classname, onClick }: ButtonProps) => {
  return (
    <button className={classname} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
