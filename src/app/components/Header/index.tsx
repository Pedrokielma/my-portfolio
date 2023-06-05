import style from "./header.module.scss";
import { useState, useEffect, useRef  } from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface HeaderLink {
  id: string;
  title: string;
  route: string;
  activeClass: boolean;
}

const headerLinks: HeaderLink[] = [
  { id: '1', title: "Home", route: "/", activeClass: false },
  { id: '2', title: "Portfolio", route: "/", activeClass: false },
  { id: '3', title: "About", route: "/", activeClass: false },
  { id: '4', title: "Services", route: "/", activeClass: false },
  { id: '5', title: "Awards", route: "/", activeClass: false },
  { id: '6', title: "Contacts", route: "/", activeClass: false },
];



const Header = () => {
  const [open, setOpen] = useState(false);

 

  const handleRouteChange = (componentId: string) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };

 

  return (
    <>
      <header className={style.header}>
        <div className={style.sectionLeft}>
          <ul>
            <li>
              <a>Pedro</a>
            </li>
            <li>
              <a href="#">peterkielma@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className={style.sectionRight}>
          <ul className={style.sectionRight}>
            <li>
              <a>Behance</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
          <div
            className={cx(style.toggle, {
              [style.active]: open,
            })}
            onClick={() => setOpen(!open)}
          >
            <div className={style.line1}></div>
            <div className={style.line3}></div>
          </div>
        </div>
      </header>
      <div className={cx(style.navBar, { [style.active]: !open })}>
        <ul className={style.list}>
          {headerLinks.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={cx(style.itemList, {
                    [style.active]: item.activeClass,
                  })}
                  onClick={() => handleRouteChange(item.id)}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={style.contactInfo}>
            <p className={style.contactItem}>+34635077704</p>
            <p className={style.contactItem}>peterkielma@gmail.com</p>

        </div>
      </div>
    </>
  );
};

export default Header;
