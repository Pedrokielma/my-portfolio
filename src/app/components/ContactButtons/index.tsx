import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import style from "./contactButtons.module.scss";
// import { useState } from 'react';
import classNames from "classnames/bind";
const cx = classNames.bind(style);

interface Props {
  content?: string;
  size?: string;
  children: string;
}

const ContactButtons = (props: Props) => {
  const { content, size, children } = props;

  return (
    <div className={style.contactButtons}>
      <div className={style.iconLinks}>
      <FiMail />
      <BsLinkedin />
      <BsGithub />
      </div>
      <button className={style.button}>{children}</button>
    </div>
  );
};

export default ContactButtons;
