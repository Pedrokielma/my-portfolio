import style from "./portfolioCard.module.scss";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import RoundButton from "@/app/components/RoundButton/index";
import { useInView } from "react-intersection-observer";
const cx = classNames.bind(style);

interface Prop {
  name: String;
  html_url: string;
  description: string;
  index: number;
  cardInView: CardInView[];
  setCardInView: React.Dispatch<React.SetStateAction<CardInView[]>>;
}


interface CardInView {
  [key: number]: boolean;
}

const PortfolioCard = (props: Prop) => {
  const { name, html_url, description, index, setCardInView, cardInView } =
    props;

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const cardsList = cardInView[index] && Object.values(cardInView[index]);
  const cardView = cardInView[index] && cardsList[0];

 const hundleCardView = () => {
    setCardInView((prevCardInView) => {
        const updatedCardInView = [...prevCardInView];
        updatedCardInView[index] = { [index]: inView };
        return updatedCardInView;
      });
     
      
 }


  useEffect(() => {
    hundleCardView()
    
  }, [inView]);

  
 

  return (
    <div ref={ref} key={index} className={cx(style.itemCard, {
        [style.inView]: cardView,
      })} >
      <a href={html_url} className={style.item} target="_blank">
        <div className={style.mainInfo} >
        <p className={style.number}>{String(index + 1).padStart(2, "0")}</p>
        <p className={style.name}>{name.replace("_", "-")}</p>
        </div>
        <p className={style.description}>{description}</p>
        <div className={style.roundButton}>
          <RoundButton size="small" content="VIEW" />
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard;
