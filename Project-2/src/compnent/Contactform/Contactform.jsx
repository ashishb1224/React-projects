import styles from "./Contactform.module.css";
import Button from "../button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const Contactform = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("event")
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

        <form onClick={onSubmit}>
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="Email" />
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
      </div>
      <div className="content-img">
        <img src="/image/logo2.png" alt="logo2" />
      </div>
    </section>
  );
};

export default Contactform;
