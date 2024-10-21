import classNames from "classnames/bind";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
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
  handleRouteChange: (id: string) => void;
}

const navLinks: NavLink[] = [
  { id: "1", title: "Home", route: "/" },
  { id: "2", title: "Success Cases", route: "/" },
  { id: "3", title: "About me", route: "/" },
  { id: "4", title: "Services", route: "/" },
  { id: "5", title: "Contact", route: "/" },
];

const NavBar = (props: Props) => {
  const { activeLink, openNav, setOpenNav, handleRouteChange } = props;

  // const handleRouteChange = (componentId: string) => {
  //   const component = document.getElementById(componentId);
  //   if (component) {
  //     component.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const handleRouteChange = (componentId: string) => {
  //   const yOffset = -110;
  //   const element = document.getElementById(componentId);
  //   if (element) {
  //     const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }
  // };

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
        <a href="whatsapp://send?phone=+34635077704" target="_blank">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/Pedrokielma" target="_blank">
          <BsGithub />
        </a>
        <a href="https://calendly.com/peterkielma/30min" target="_blank">
          <IoCalendarNumber />
        </a>
      </div>
      </div>
  );
};

export default NavBar;