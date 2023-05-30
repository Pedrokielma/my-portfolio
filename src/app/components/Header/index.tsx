import style from "./header.module.scss";
// import { useState } from 'react';
// import classNames from "classnames/bind";

// const cx = classNames.bind(style);

interface HeaderLink {
  id: number;
  title: string;
  route: string;
}

const headerLinks: HeaderLink[] = [
  { id: 1, title: "Book a vehicle", route: "/" },
  { id: 2, title: "Privacy Policy", route: "/" },
  { id: 3, title: "Support", route: "/" },
  { id: 4, title: "Terms & Conditions", route: "/" },
];

const Header: React.FC = () => {
//   const [open, setOpen] = useState(false);

  return (
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
        {/* <div
          className={cx(style.toggle, {
            [style.active]: open,
          })}
          onClick={() => setOpen(!open)}
        >
          <div className={style.line1}></div>
          <div className={style.line3}></div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
