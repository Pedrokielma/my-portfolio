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
  changeNav: (id: string) => void;
  setHeaderColor: (isBlack: HeaderColor) => void;
  handleRouteChange: (id: string) => void;
}

const HomePage = (props: Props) => {
  const { id, changeNav, setHeaderColor, handleRouteChange } = props;

  const { ref: myRef, inView: componentInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setHeaderColor({ transparent: false, black: componentInView });
    if (componentInView) {
      changeNav(id);
    }
  }, [componentInView]);

  return (
    <div ref={myRef} id={id} className={style.homePage}>
      <div
        className={cx(style.backgroundImage, {
          [style.inView]: componentInView,
        })}
      ></div>
      <section>
        <SideNavCounter counter="01" />

        <div className={style.homePageSection}>
          <div
            className={cx(style.homePageContent, {
              [style.inView]: componentInView,
            })}
          >
            <h1>
              <span className={style.hi}>Hi, I’m</span>{" "}
              <span className={style.name}>Pedro Kielma</span>{" "}
            </h1>
            <div className={style.subTitle}>
              <div className={style.pinkLine} />
              <p className={style.subTitleText}>Web developer</p>
            </div>
            <div
              className={cx(style.roundButtonResponsive, {
                [style.inView]: componentInView,
              })}
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
          className={cx(style.roundButton, {
            [style.inView]: componentInView,
          })}
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
