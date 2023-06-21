import { useState } from "react";
import classNames from "classnames/bind";
import style from "./header.module.scss";

const cx = classNames.bind(style);

interface HeaderColor {
  transparent: boolean;
  black: boolean;
}
interface Props {
  activeLink: string;
  headerColor: HeaderColor;
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
  handleRouteChange: (id: string) => void;
}

const Header = (props: Props) => {
  const { headerColor, openNav, setOpenNav, handleRouteChange } = props;

  return (
    <>
      <header
        className={cx(style.header, {
          [style.transparent]: headerColor.transparent,
          [style.black]: headerColor.black,
        })}
      >
        <div className={style.sectionLeft}>
          <a
            onClick={() => {
              handleRouteChange("1");
            }}
            className={style.logo}
          >
            PEDRO <br />
            KIELMA
          </a>
        </div>
        <div className={style.sectionRight}>
          <ul className={style.midiaLink}>
            <li>
              <a
                href="https://www.linkedin.com/in/pedro-kielmanowicz/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/Pedrokielma" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div
        className={cx(style.toggle, {
          [style.active]: openNav,
          [style.black]: headerColor.transparent,
        })}
        onClick={() => setOpenNav(!openNav)}
      >
        <div
          className={cx(style.line1, {
            [style.black]: headerColor.transparent,
          })}
        ></div>
        <div
          className={cx(style.line2, {
            [style.black]: headerColor.transparent,
          })}
        ></div>
      </div>
    </>
  );
};

export default Header;
