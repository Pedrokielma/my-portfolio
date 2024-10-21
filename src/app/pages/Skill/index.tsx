import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import classNames from "classnames/bind";
import { IoMdOpen } from "react-icons/io";
import Image from "next/image";
const cx = classNames.bind(style);

import style from "./skill.module.scss";

interface HeaderColor {
  transparent: boolean;
  black: boolean;
}
interface Skill {
  name: string;
  detail: string;
  image: string;
  link: string;
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
    {
      name: "Local SEO & Google Maps Setup",
      detail: "Optimize local search visibility to attract nearby clients.",
      link: "https://calendly.com/peterkielma/30min?month=2024-10",
      image: "/images/website.jpg", // Replace with the relevant image for this service
    },
    {
      name: "Website & Landing Page Creation",
      detail: "Build a website or landing page that’s designed to convert visitors into leads.",
      link: "https://calendly.com/peterkielma/30min?month=2024-10",
      image: "/images/strategy.jpg", // Replace with the relevant image for this service
    },
    {
      name: "Ongoing SEO & Performance Improvement",
      detail: "Provide ongoing SEO strategy and regular audits to ensure long-term growth and optimal performance.",
      link: "https://calendly.com/peterkielma/30min?month=2024-10",
      image: "/images/service.jpg", // Replace with the relevant image for this service
    },
   
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
      <SideNavCounter counter="04" name="Services" />
      <div className={style.skillSection}>
        <p className={style.titleSection}>Services</p>
        <div className={style.skillContent}>
          <h2 className={style.skillTitle}>
          Your Growth Starts Here: Explore Our Solutions
          </h2>
          <div className={style.skillTable}>
            {mySkill?.map((item, index) => (
              // <div key={index} className={style.item}>
              //   <p className={style.name}>{item.name}</p>
              //   <p className={style.detail}>{item.detail}</p>
              // </div>
              <div key={index} className={style.card}>
                <div className={style.cardContent}>
                <Image
                  src={item.image}
                  alt={item.name}
                  className={style.cardImage}

                  width={400} // You can adjust the width/height based on your layout
                  height={300}
                  layout="responsive" // Automatically adjusts for responsiveness
                />
                  <h3 className={style.cardTitle}>{item.name}</h3>
                  <p className={style.cardDetail}>{item.detail}</p>
                </div>
                <a href='https://calendly.com/peterkielma/30min' target="_blank"  download='"PedroResume.pdf' className={style.button}>
            <span>Get Your Free Consult</span>
            <IoMdOpen />
      </a>
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
