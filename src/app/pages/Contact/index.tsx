// import { useState } from 'react';
// import classNames from "classnames/bind";

// const cx = classNames.bind(style);
import SideNavCounter from "@/app/components/SideNavCounter/index";
import style from "./contact.module.scss";
import InputField from '@/app/components/InputField/index'

const Contact: React.FC = () => {
  //   const [open, setOpen] = useState(false);

  return (
    <div className={style.contact}>
      <SideNavCounter counter="06" name="GET IN TOUCH" />
      <div className={style.contactSection}>
        <div className={style.contactContent}>
        <h2 className={style.contactTitle}>
          I value transparency and integrity.{" "}
        </h2>
          <div className={style.contactInfo}>
            <p className={style.contactInfoTitle}>My contact info</p>
            <div className={style.contactInfoItem}>
            <p >Lisbon, Portugal</p>
            <p >+34 635077704</p>
            <p >hello@georgelewis.com</p>
            </div>
          </div>
        </div>
        <div className={style.contactForm}>
            <InputField name='name' value='' inputType='text' placeholder="Name"/>

        </div>
      </div>
    </div>
  );
};

export default Contact;
