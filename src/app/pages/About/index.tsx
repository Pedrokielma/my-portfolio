import { useEffect } from "react";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import { useInView } from "react-intersection-observer";
import ContactButtons from "@/app/components/ContactButtons/index";
import LazyLoad from "react-lazyload";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

import style from "./about.module.scss";

interface HeaderColor {
  transparent: boolean;
  black: boolean;
}
interface Props {
  id: string;
  changeNav: (id: string) => void;
  setHeaderColor: (isBlack: HeaderColor) => void;
}

const About = (props: Props) => {
  const { id, changeNav, setHeaderColor } = props;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.3,
  });

  const { ref: videoRef, inView: videoInView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      changeNav(id);
      setHeaderColor({ black: false, transparent: false });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id={id}
      className={cx(style.about, {
        [style.inView]: inView,
      })}
    >
      <SideNavCounter counter="03" name="About me" />
      <div className={style.aboutContainer}>
        <p className={style.titleSection}>About me</p>
        <div
          ref={contentRef}
          className={cx(style.aboutSection, {
            [style.inView]: contentInView,
          })}
        >
          <div className={style.aboutUpper}>
            <h2 className={style.aboutTitle}>
              {`Dawn's surf, day's code: Riding the waves of technology and
              adventure.`}
            </h2>
            <div className={style.aboutContent}>
              <div className={style.aboutText}>
                <p>
                  Surfing teaches me resilience, patience, and the ability to
                  adapt. These lessons resonate in my coding journey, pushing me
                  to overcome obstacles and find innovative solutions. I find
                  harmony in the ever-changing tides of technology: merging
                  seamless code with thoughtful user experiences.
                </p>
              </div>
              <div className={style.buttons}>
                <ContactButtons>Resume</ContactButtons>
              </div>
            </div>
          </div>
          <div className={style.aboutMidia}>
            <div className={style.aboutImage}></div>
            <div
              ref={videoRef}
              className={cx(style.aboutVideoWrapper, {
                [style.inView]: videoInView,
              })}
            >
              <LazyLoad once>
                <iframe
                  src="https://www.youtube.com/embed/iIiy3WHA1PM?mute=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen;"
                ></iframe>
              </LazyLoad>
            </div>
          </div>
        </div>
        <div className={style.counter}>
          <p className={style.currentPage}>03</p>
          <p className={style.totalPages}>/5</p>
        </div>
      </div>
    </section>
  );
};

export default About;