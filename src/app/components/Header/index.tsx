import { useState } from "react";
import classNames from "classnames/bind";
import style from "./header.module.scss";

const cx = classNames.bind(style);

interface Props {
  activeLink: string;
  blackHeader: boolean;
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
  handleRouteChange: (id: string)=> void;
}



const Header = (props: Props) => {
  const { blackHeader, openNav, setOpenNav, handleRouteChange } = props;


  return (
    <>
      <header className={cx(style.header, { [style.black]: blackHeader })}>
        <div className={style.sectionLeft}>
          <a onClick={()=> {handleRouteChange('1')}} className={style.logo}>
            PEDRO <br />
            KIELMA
          </a>
        </div>
        <div className={
        style.sectionRight }>
          <ul className={style.midiaLink}>
            <li>
              <a href="https://www.linkedin.com/in/pedro-kielmanowicz/" target="_blank">Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/Pedrokielma" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </header>
          <div
            className={cx(style.toggle, {
              [style.active]: openNav,
              [style.black]: blackHeader,
            })}
            onClick={() => setOpenNav(!openNav)}
          >
            <div className={cx(style.line1, {
              [style.black]: blackHeader,
            })}></div>
            <div className={cx(style.line2, {
              [style.black]: blackHeader,
            })}></div>
          </div>
    </>
  );
};

export default Header;
