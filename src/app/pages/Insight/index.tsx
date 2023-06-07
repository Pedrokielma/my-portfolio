import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import classNames from "classnames/bind";

import SideNavCounter from "@/app/components/SideNavCounter/index";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import style from "./insight.module.scss";

const cx = classNames.bind(style);
interface Insights {
  name: string;
  detail: string;
  date: string;
  image?: string;
}
interface Props {
  id: string
  changeNav: (id: string) => void,
}

const Insight = (props: Props) => {
  const {id, changeNav} = props;
  const [myInsight] = useState<Insights[]>([
    {
      name: "insight1",
      detail: "lorem iponsoenague ipsem alejkdnjfnks hbjhfjks",
      date: "02/05/2022",
      image: "https:my/dkjflld/nskjdnkjnkd.com",
    },
    {
      name: "insight1",
      detail: "lorem iponsoenague ipsem alejkdnjfnks hbjhfjks",
      date: "02/05/2022",
      image: "https:my/dkjflld/nskjdnkjnkd.com",
    },
    {
      name: "insight1",
      detail: "lorem iponsoenague ipsem alejkdnjfnks hbjhfjks",
      date: "02/05/2022",
      image: "https:my/dkjflld/nskjdnkjnkd.com",
    },
    {
      name: "insight1",
      detail: "lorem iponsoenague ipsem alejkdnjfnks hbjhfjks",
      date: "02/05/2022",
      image: "https:my/dkjflld/nskjdnkjnkd.com",
    },
  ]);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });


  const isOdd = (number: number) => {
    if(number % 2 == 0){
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    if(inView){
      changeNav(id)
    }
  }, [inView]);

  return (
    <div ref={ref} id={id} className={style.insight}>
      <SideNavCounter counter="05" name='MY INSIGHTS'/>
      <div className={style.insightSection}>
        <div className={style.insightUpper}>
          <h2 className={style.insightTitle}>What’s on my mind</h2>
          <div className={style.buttonsList}>
            <div className={style.leftButton}>
              {" "}
              <RiArrowLeftSLine />
            </div>
            <div className={style.rightButton}>
              {" "}
              <RiArrowRightSLine />
            </div>
          </div>
        </div>
        <div className={style.insightList}>
          {
            myInsight?.map((item, index)=>(
              <div key={index} className={style.insightItem}>
                <div className={cx(style.image, {[style.big]: isOdd(index)})}/>
                <div className={style.content}>
                  <div className={style.date}>{item.date}</div>
                  <div className={style.detail}>{item.detail}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Insight;
