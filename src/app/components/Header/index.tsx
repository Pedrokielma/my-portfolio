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
              <a href="whatsapp://send?phone=+34635077704" target="_blank">
                Whatsapp
              </a>
            </li>
            <li>
              <a
                href="https://calendly.com/peterkielma/30min"
                target="_blank"
              >
                Book your 15 minute discovery call
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
            [style.black]: headerColor.black,
            [style.transparent]: headerColor.transparent,
          })}
        ></div>
        <div
          className={cx(style.line2, {
            [style.transparent]: headerColor.transparent,
            [style.black]: headerColor.black,
          })}
        ></div>
      </div>
    </>
  );
};

export default Header;
