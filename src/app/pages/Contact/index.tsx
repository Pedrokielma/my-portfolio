import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import SideNavCounter from "@/app/components/SideNavCounter/index";
import InputField from '@/app/components/InputField/index';
import ContactButtons from "@/app/components/ContactButtons/index";

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
      <SideNavCounter counter="05" name="Contact" />
      <div className={style.contactSection}>
        <h2 className={style.contactTitle}>
       {"Let's talk!"}
        </h2>
       <div className={style.arrow}>
        <div className={style.arrowBody}/>
        <div className={style.arrowupperLine}/>
        <div className={style.arrowbellowLine}/>
       </div>
       <div className={style.contactInfo}>
        <p className={style.contactText}>My contact info</p>
        <ContactButtons>Resume</ContactButtons>
         </div>
      </div>
    </section>
  );
};

export default Contact;
