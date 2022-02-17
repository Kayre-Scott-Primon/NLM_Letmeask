import { ButtonHTMLAttributes } from 'react'

//styles .scss
import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
     isOutlined?: boolean
}

export function Button({isOutlined = false, ...props}: ButtonProps) {
     return (
          <button 
               className={`button ${isOutlined ? 'outlined' : ''}`} 
               {...props}
          />
     )
}