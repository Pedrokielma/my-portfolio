import { useState } from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
import SideNavCounter from "@/app/components/SideNavCounter/index";
import style from "./insight.module.scss";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface Insights {
  name: string;
  detail: string;
  date: string;
  image?: string;
}

const Insight: React.FC = () => {
  const [myInsight, setmyInsights] = useState<Insights[]>([
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

  const isOdd = (number: number) => {
    if(number % 2 == 0){
      return true
    } else {
      return false
    }
  }

  return (
    <div className={style.insight}>
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
