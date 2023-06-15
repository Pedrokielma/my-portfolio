import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import style from "./contactButtons.module.scss";
// import { useState } from 'react';
import classNames from "classnames/bind";
const cx = classNames.bind(style);

interface Props {
  children: string;
}

const ContactButtons = (props: Props) => {
  const { children } = props;

  return (
    <div className={style.contactButtons}>
      <div className={style.iconLinks}>
        <a
          href="https://www.linkedin.com/in/pedro-kielmanowicz/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Pedrokielma" target="_blank">
          <BsGithub  />
        </a>
        <a href="mailto:peterkielma@gmail.com">
          <FiMail />
        </a>
      </div>
      <a href='../../../../public/PedroResume.pdf' download className={style.button}>{children}</a>
    </div>
  );
};

export default ContactButtons;
