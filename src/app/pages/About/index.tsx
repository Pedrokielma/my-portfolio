import { useEffect } from "react";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import { useInView } from "react-intersection-observer";
import ContactButtons from "@/app/components/ContactButtons/index";

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

  useEffect(() => {
    if (inView) {
      changeNav(id);
      setHeaderColor({ black: false, transparent: false });
    }
  }, [inView]);

  return (
    <section ref={ref} id={id} className={style.about}>
      <SideNavCounter counter="03" name="About me" />
      <div className={style.aboutContainer}>
        <p className={style.titleSection}>About me</p>
      <div className={style.aboutSection}>
        <div className={style.aboutUpper}>
          <h2 className={style.aboutTitle}>
            Love for the coding, surf, and all things outdoors.
          </h2>
          <div className={style.aboutContent}>
            <div className={style.aboutText}>
              <p>
                I am a frontend developer passionate about surf and technology.
                Specializing in frontend, I also enjoy blockchain, economics,
                and backend technologies. I strive to create seamless user
                experiences, merging technology with captivating digital
                solutions
              </p>
            </div>
            <div className={style.buttons}>
              <ContactButtons>Resume</ContactButtons>
            </div>
          </div>
        </div>
        <div className={style.aboutMidia}>
          <div className={style.aboutImage}></div>
          <div className={style.aboutVideoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/iIiy3WHA1PM?mute=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen;"
            ></iframe>
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
