import styles from "./Contactform.module.css";
import Button from "../button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const Contactform = () => {
  const [name , setName] = useState("ashu")
  const [email , setEmail] = useState("ashishbhardwaj@gmail.com")
  const [text , setText] = useState("Do some coding")
  const onSubmit = (event) => {
    
    event.preventDefault();

    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)

    console.log({name , email , text})
  };
  return (

    <section className={styles.container}>
      <div className={styles.contact_section}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button 
          text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <div>
            <Button isoutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />
        </div>

        <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="Text">Text</label>
                <textarea name="Text" rows={8} />
            </div>
            <div style={{display:"flex",
                justifyContent:"center"
            }}>
             <Button text="Submit" />
            </div>
        </form>
        <div>{name + " " + email + " " + text}</div>
      </div>
      <div className="content-img">
        <img src="/image/logo2.png" alt="logo2" />
      </div>
    </section>
  );
};

export default Contactform;
