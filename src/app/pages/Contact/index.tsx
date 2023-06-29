import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import ContactButtons from "@/app/components/ContactButtons/index";

import style from "./contact.module.scss";

interface HeaderColor {
  transparent: boolean;
  black: boolean;
}
interface Props {
  id: string;
  changeNav: (id: string) => void;
  headerColor: HeaderColor;
  setHeaderColor: (isBlack: HeaderColor) => void;
}

const Contact = (props: Props) => {
  const { id, changeNav, headerColor, setHeaderColor } = props;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      changeNav(id);
    }
    setHeaderColor({ black: false, transparent: inView });
  }, [inView]);

console.log('headerColor', headerColor)
  return (
    <div className={style.contactBackground}>
      <section ref={ref} id={id} className={style.contact}>
        <SideNavCounter counter="05" name="Contact" />
        <div className={style.contactSection}>
        <p className={style.titleSection}>Contact</p>
        <div className={style.contactConteiner}>
          <h2 className={style.contactTitle}>{"Let's talk!"}</h2>
        
          <div className={style.contactInfo}>
            <p className={style.contactText}>My contact info</p>
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
