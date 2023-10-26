type TextareaProps = {
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  name: string
}
const Textarea = ({ value, placeholder, onChange, name }: TextareaProps) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      cols={30}
      rows={10}
    ></textarea>
  )
}

export default Textarea
