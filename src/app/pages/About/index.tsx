import { useEffect } from "react";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import { useInView } from "react-intersection-observer";
import ContactButtons from "@/app/components/ContactButtons/index";
// import LazyLoad from "react-lazyload";
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
              {`Transform Your Website into a Revenue-Generating Machine`}
            </h2>
            <div className={style.aboutContent}>
              <div className={style.aboutText}>
                <p>
                {`I specialize in helping service businesses turn their websites into high-converting tools that generate leads, build trust, and grow revenue. If you’re still trying to get your digital presence right—or you need a site that actually drives results—let's talk!`}
                
                </p>
              </div>
              <div className={style.buttons}>
                <ContactButtons>Resume</ContactButtons>
              </div>
            </div>
          </div>
          <div className={style.aboutMidia}>
            <div
              ref={videoRef}
              className={cx(style.aboutVideoWrapper, {
                [style.inView]: videoInView,
              })}
            >
             
              <iframe  src="https://www.youtube.com/embed/fORod00uhAc?si=bqmZ3DPgvjDAhlHt" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen;"></iframe>
  
             
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
