import { useState  } from "react";
import classNames from "classnames/bind";
import style from "./header.module.scss";

const cx = classNames.bind(style);

interface HeaderLink {
  id: string;
  title: string;
  route: string;
}
interface Props{
  activeLink: string
}

const headerLinks: HeaderLink[] = [
  { id: '1', title: "Home", route: "/" },
  { id: '2', title: "Portfolio", route: "/" },
  { id: '3', title: "About", route: "/" },
  { id: '4', title: "Services", route: "/" },
  { id: '5', title: "Awards", route: "/" },
  { id: '6', title: "Contacts", route: "/" },
];



const Header = (props: Props) => {
  const { activeLink } = props
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
                    [style.active]: item.id === activeLink,
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
