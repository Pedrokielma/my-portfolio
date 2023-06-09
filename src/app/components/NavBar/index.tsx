import { useState } from "react";
import classNames from "classnames/bind";
import style from "./navBar.module.scss";

const cx = classNames.bind(style);

interface NavLink {
  id: string;
  title: string;
  route: string;
}
interface Props {
  activeLink: string;
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const navLinks: NavLink[] = [
  { id: "1", title: "Home", route: "/" },
  { id: "2", title: "Portfolio", route: "/" },
  { id: "3", title: "About", route: "/" },
  { id: "4", title: "Services", route: "/" },
  { id: "5", title: "Awards", route: "/" },
  { id: "6", title: "Contacts", route: "/" },
];

const NavBar = (props: Props) => {
  const { activeLink, openNav, setOpenNav } = props;

  const handleRouteChange = (componentId: string) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   
      <div className={cx(style.navBar, { [style.active]: !openNav })}>
        <ul className={style.list}>
          {navLinks.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={cx(style.itemList, {
                    [style.active]: item.id === activeLink,
                  })}
                  onClick={() => {handleRouteChange(item.id), setOpenNav(!openNav)}}
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
  );
};

export default NavBar;