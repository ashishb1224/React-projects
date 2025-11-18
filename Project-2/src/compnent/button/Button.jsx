import styles from './Button.module.css'
import { MdMessage } from "react-icons/md";
const Button = ({isoutline, icon, text, ...rest}) => {
  return (
    <button 
    {...rest}
    className={isoutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button;
