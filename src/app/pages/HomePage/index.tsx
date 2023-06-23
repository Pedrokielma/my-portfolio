import { useEffect } from "react";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import RoundButton from "@/app/components/RoundButton/index";
import { useInView } from "react-intersection-observer";

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
      <section>
        <SideNavCounter counter="01" />
        <div className={style.homePagesection}>
          <h1>
            <span className={style.hi}>Hi, I’m</span>{" "}
            <span className={style.name}>Pedro Kielma</span>{" "}
          </h1>
          <div
            className={style.roundButtonResponsive}
            onClick={() => {
              handleRouteChange("5");
            }}
          >
            <RoundButton size="small" content="LET'S TALK" />
          </div>
          <p className={style.subTitle}>Frontend developer</p>
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
