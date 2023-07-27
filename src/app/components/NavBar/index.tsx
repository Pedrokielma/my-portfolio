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
  handleRouteChange: (id: string) => void;
}

const navLinks: NavLink[] = [
  { id: "1", title: "Home", route: "/" },
  { id: "2", title: "Selected works", route: "/" },
  { id: "3", title: "About me", route: "/" },
  { id: "4", title: "Skills", route: "/" },
  { id: "5", title: "Contact", route: "/" },
];

const NavBar = (props: Props) => {
  const { activeLink, openNav, setOpenNav, handleRouteChange} = props;

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
      </div>
  );
};

export default NavBar;