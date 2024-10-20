import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

import style from "./skill.module.scss";

interface HeaderColor {
  transparent: boolean;
  black: boolean;
}
interface Skill {
  name: String;
  detail: String;
}
interface Props {
  id: string;
  changeNav: (id: string) => void;
  setHeaderColor: (isBlack: HeaderColor) => void;
}

const Skill = (props: Props) => {
  const { id, changeNav, setHeaderColor } = props;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [mySkill] = useState<Skill[]>([
    { name: "WordPress", detail: "Robust CMS for developing conversion-focused websites" },
  { name: "HTML & CSS", detail: "Core web development languages for building responsive layouts" },
  { name: "JavaScript", detail: "Versatile scripting language for interactive web experiences" },
  { name: "Figma", detail: "UX/UI design tool for wireframes and visual prototypes" },
  { name: "SEO Tools", detail: "SEMrush, Google Analytics for optimizing search engine performance" },
  { name: "Google Analytics", detail: "Tracking and measuring website traffic and user behavior" },
  { name: "Branding Strategy", detail: "Aligning design and content with business goals for impact" },
  { name: "UX/UI Research", detail: "Designing user-centered experiences that drive conversions" }
  ]);

  useEffect(() => {
    if (inView) {
      changeNav(id);
      setHeaderColor({ black: false, transparent: false });
    }
  }, [inView, id]);

  return (
    <section
      ref={ref}
      id={id}
      className={cx(style.skill, {
        [style.inView]: inView,
      })}
    >
      <SideNavCounter counter="04" name="Skills" />
      <div className={style.skillSection}>
        <p className={style.titleSection}>Skills</p>
        <div className={style.skillContent}>
          <h2 className={style.skillTitle}>
            My set of skills to bring exceptional ideas to life.
          </h2>
          <div className={style.skillTable}>
            {mySkill?.map((item, index) => (
              <div key={index} className={style.item}>
                <p className={style.name}>{item.name}</p>
                <p className={style.detail}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.counter}>
          <p className={style.currentPage}>04</p>
          <p className={style.totalPages}>/5</p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
