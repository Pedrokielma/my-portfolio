import { useState } from "react";
// import classNames from "classnames/bind";

// const cx = classNames.bind(style);
import SideNavCounter from "@/app/components/SideNavCounter/index";
import style from "./skill.module.scss";

interface Skill {
  name: String;
  detail: String;
}

const Skill: React.FC = () => {
  const [mySkill, setMySkill] = useState<Skill[]>([
    {name: "JavaScript", detail: "Object-oriented coding lenguage"},
    {name: "TypeScript", detail: "Object-oriented coding lenguage"},
    {name: "React.js", detail: "Frontend framework to webdevelopment" },
    {name: "Next.js", detail: "Frontend framework to webdevelopment"},
    {name: "Express.js", detail: "backend framework to webdevelopment"},
    {name: "Node.js", detail: "backend framework to webdevelopment"},
    {name: "SASS", detail: "Style CSS lybrary"},
    {name: "HTML5", detail: "HyperText Markup Language "},

  ]);

  return (
    <div className={style.skill}>
      <SideNavCounter counter="04" />
      <div className={style.skillSection}>
        <div className={style.skillContent}>
          <h2 className={style.skillTitle}>My coding skills</h2>
          <div className={style.skillTable}>
          {mySkill?.map((item, index)=>(
              <div key={index} className={style.item}>
                <p className={style.name}>{item.name}</p>
                <p className={style.detail}>{item.detail}</p>
              </div>
          ))}
          </div>
        </div>
        <div className={style.skillImage} />
      </div>
    </div>
  );
};

export default Skill;
