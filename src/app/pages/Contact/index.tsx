import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import ContactButtons from "@/app/components/ContactButtons/index";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

import style from "./contact.module.scss";

interface HeaderColor {
  transparent: boolean;
  black: boolean;
}
interface Props {
  id: string;
  changeNav: (id: string) => void;
  setHeaderColor: (isBlack: HeaderColor) => void;
}

const Contact = (props: Props) => {
  const { id, changeNav, setHeaderColor } = props;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      changeNav(id);
    }
    setHeaderColor({ black: false, transparent: inView });
  }, [inView]);

  return (
    <div className={style.contactBackground}>
      <section ref={ref} id={id} 
       className={cx(style.contact, {
        [style.inView]: inView,
      })}
      >
        <SideNavCounter counter="05" name="Contact" />
        <div className={style.contactSection}>
        <p className={style.titleSection}>Contact</p>
        <div className={style.contactConteiner}>
          <h2 className={style.contactTitle}>{"Let's talk!"}</h2>
        
          <div className={style.contactInfo}>
            <p className={style.contactText}>My contact infoo</p>
            <ContactButtons>Resume</ContactButtons>
          </div>
        </div>
        <div className={style.counter}>
          <p className={style.currentPage}>05</p>
          <p className={style.totalPages}>/5</p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
