import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import SideNavCounter from "@/app/components/SideNavCounter/index";
import InputField from '@/app/components/InputField/index';

import style from "./contact.module.scss";

interface Props{
  id: string;
  changeNav: (id: string) => void,
}

const Contact  = (props: Props) => {
  const{id, changeNav} = props;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });


  useEffect(() => {
    if(inView){
      changeNav(id)
    }
  }, [inView]);

  return (
    <section ref={ref} id={id} className={style.contact}>
      <SideNavCounter counter="05" name="GET IN TOUCH" />
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
          <div className={style.contactFormInfo}>
            <InputField name='name' value='' inputType='text' placeholder="Name"/>
            <InputField name='email' value='' inputType='text' placeholder="Email"/>
          </div>
            <InputField name='message' value='' inputType='textArea' placeholder="Message"/>

        </div>
      </div>
    </section>
  );
};

export default Contact;
