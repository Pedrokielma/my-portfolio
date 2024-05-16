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
    { name: "JavaScript", detail: "Multi-paradigm coding Language" },
    { name: "TypeScript", detail: "Statically-typed, coding Language" },
    { name: "React.js", detail: "Frontend framework to web development" },
    { name: "Next.js", detail: "Frontend framework to web development" },
    { name: "Express.js", detail: "Backend framework to web development" },
    { name: "Node.js", detail: "Backend framework to web development" },
    { name: "Wordpress", detail: "Web development framework" },
    { name: "HTML & CSS", detail: "HyperText Markup Language " },
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
