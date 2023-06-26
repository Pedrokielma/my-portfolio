import { useEffect } from "react";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import RoundButton from "@/app/components/RoundButton/index";
import { useInView } from "react-intersection-observer";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

import style from "./homePage.module.scss";

interface HeaderColor {
  transparent: boolean;
  black: boolean;
}
interface Props {
  id: string;
  headerColor: HeaderColor;
  changeNav: (id: string) => void;
  setHeaderColor: (isBlack: HeaderColor) => void;
  handleRouteChange: (id: string) => void;
}

const HomePage = (props: Props) => {
  const { id, changeNav, setHeaderColor, handleRouteChange, headerColor } =
    props;

  const { ref: myRef, inView: componentInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setHeaderColor({ ...headerColor, transparent: componentInView });
    if (componentInView) {
      changeNav(id);
    }
  }, [componentInView]);

  return (
    <div ref={myRef} id={id} className={style.homePage}>
      <div  className={cx(style.backgroundImage, {
          [style.inView]: componentInView,
        })} >
      </div>
        <section>
          <SideNavCounter counter="01" />

          <div className={style.homePageSection}>
            <div className={style.homePageContent}>
            <h1>
              <span className={style.hi}>Hi, I’m</span>{" "}
              <span className={style.name}>Pedro Kielma</span>{" "}
            </h1>
            <div className={style.subTitle}>
            <div className={style.pinkLine}/>
            <p className={style.subTitleText}>Front-end developer</p>
            </div>
            <div
              className={style.roundButtonResponsive}
              onClick={() => {
                handleRouteChange("5");
              }}
            >
              <RoundButton size="big" content="LET'S TALK" />
            </div>
            </div>
            <div className={style.counter}>
          <p className={style.currentPage}>01</p>
          <p className={style.totalPages}>/5</p>
          </div>
          </div>
          <div
            className={style.roundButton}
            onClick={() => {
              handleRouteChange("5");
            }}
          >
            <RoundButton size="big" content="LET'S TALK" />
          </div>
        </section>
    </div>
  );
};

export default HomePage;
