import { useState } from "react";
import classNames from "classnames/bind";
import style from "./header.module.scss";

const cx = classNames.bind(style);

interface HeaderLink {
  id: string;
  title: string;
  route: string;
}
interface Props {
  activeLink: string;
  blackHeader: boolean;
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}



const Header = (props: Props) => {
  const { blackHeader, openNav, setOpenNav } = props;

  const handleRouteChange = (componentId: string) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        cx(style.sectionRight, {
          [style.none]: openNav,
        })}>
          <ul className={style.midiaLink}>
            <li>
              <a >Linkedin</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
          </ul>
          <div
            className={cx(style.toggle, {
              [style.active]: openNav,
            })}
            onClick={() => setOpenNav(!openNav)}
          >
            <div className={style.line1}></div>
            <div className={style.line3}></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
