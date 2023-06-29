import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
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
        <a href="https://github.com/Pedrokielma" target="_blank">
          <BsGithub />
        </a>
      </div>
      <a href='/PedroResume.pdf' target="_blank"  download='"resume.pdf' className={style.button}>
        {children}
      </a>
    </div>
  );
};

export default ContactButtons;
