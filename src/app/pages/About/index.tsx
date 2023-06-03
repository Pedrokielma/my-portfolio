// import { useState } from 'react';
// import classNames from "classnames/bind";

// const cx = classNames.bind(style);
import SideNavCounter from "@/app/components/SideNavCounter/index";
import style from "./about.module.scss";

const About: React.FC = () => {
  //   const [open, setOpen] = useState(false);

  return (
    <div className={style.about}>
      <SideNavCounter counter="03" />
      <div className={style.aboutSection}>
        <h2 className={style.aboutTitle}>
          I am a passionate Frontend developer
        </h2>
        <div className={style.aboutContent}>
          <div className={style.aboutText}>
            <p>
              I’m a visual designer from Germany I had the chance to work for
              top brands and small beautiful ones. I believe good design is
              first of all about emotions and feelings and then your hard and
              technical skills.{" "}
            </p>
            <p>
              When you achieve a sense of new, or different, exactly at this
              moment you communicating and connecting with people on an
              emotional level. Now that's good design.
            </p>
          </div>
          <p className={style.aboutExperience}>+6 years experience</p>
        </div>
        <div className={style.aboutImage}></div>
      </div>
    </div>
  );
};

export default About;
