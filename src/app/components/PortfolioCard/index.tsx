import style from "./portfolioCard.module.scss";
// import { useState } from 'react';
import classNames from "classnames/bind";
import RoundButton from "@/app/components/RoundButton/index";
const cx = classNames.bind(style);

interface FooProp {
  name: String;
  html_url: string;
  description: string;
  index: number
}


const PortfolioCard = (props: FooProp) => {
  const { name, html_url, description, index } = props;
  return (
    <div className={style.itemCard}>
    <a
      href={html_url}
      className={style.item}
      target="_blank"
    >
      <p className={style.number}>
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className={style.name}>
        {name.replace("_", "-")}
      </p>
      <p className={style.description}>{description}</p>
      <div className={style.roundButton}>
        <RoundButton size="small" content="VIEW" />
      </div>
    </a>
  </div>
  );
};

export default PortfolioCard;
