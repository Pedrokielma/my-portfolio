import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import style from "./contactButtons.module.scss";

interface Props {
  children: string;
}

const ContactButtons = (props: Props) => {
  const { children } = props;

  return (
    <div className={style.contactButtons}>
      <div className={style.iconLinks}>
        <a href="mailto:peterkielma@gmail.com">
          <FiMail />
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-kielmanowicz/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="whatsapp://send?phone=+34635077704" target="_blank">
          <FaWhatsapp />
        </a>
      </div>
      <a href='/PedroResume.pdf' target="_blank"  download='"PedroResume.pdf' className={style.button}>
        {children}
      </a>
    </div>
  );
};

export default ContactButtons;
