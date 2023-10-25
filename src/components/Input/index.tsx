import React from 'react'

interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  name: string
}
const Input = ({ value, onChange, placeholder, name }: InputProps) => {
  return <input value={value} onChange={onChange} placeholder={placeholder} name={name} />
}

export default Input
