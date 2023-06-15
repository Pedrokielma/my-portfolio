import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import SideNavCounter from "@/app/components/SideNavCounter/index";
import style from "./skill.module.scss";

interface Skill {
  name: String;
  detail: String;
}
interface Props{
  id: string;
  changeNav: (id: string) => void,
}

const Skill = (props: Props) => {
  const{ id, changeNav } = props;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });


  const [mySkill] = useState<Skill[]>([
    {name: "JavaScript", detail: "Object-oriented coding lenguage"},
    {name: "TypeScript", detail: "Object-oriented coding lenguage"},
    {name: "React.js", detail: "Frontend framework to webdevelopment" },
    {name: "Next.js", detail: "Frontend framework to webdevelopment"},
    {name: "Express.js", detail: "backend framework to webdevelopment"},
    {name: "Node.js", detail: "backend framework to webdevelopment"},
    {name: "SASS", detail: "Style CSS lybrary"},
    {name: "HTML5", detail: "HyperText Markup Language "},

  ]);




  useEffect(() => {
    if(inView){
      changeNav(id)
    }
  }, [inView]);

  return (
    <section ref={ref} id={id} className={style.skill}>
      <SideNavCounter counter="04" name='Skills' />
      <div className={style.skillSection}>
        <div className={style.skillContent}>
          <h2 className={style.skillTitle}>My set of skills to bring exceptional ideas to life.</h2>
          <div className={style.skillTable}>
          {mySkill?.map((item, index)=>(
              <div key={index} className={style.item}>
                <p className={style.name}>{item.name}</p>
                <p className={style.detail}>{item.detail}</p>
              </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
