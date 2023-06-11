import style from "./roundbutton.module.scss";
// import { useState } from 'react';
import classNames from "classnames/bind";
const cx = classNames.bind(style);

interface Props {
  content: string;
  size: string;
}

const RoundButton = (props: Props) => {
  const { content, size } = props;

  return (
    <div className={cx(style.roundButton ,{[style.small]: size === 'small'})}>
      <p className={style.content}>
        {content.split("").map((char, index) => (
          <span
            key={index}
            style={
                content.length > 5 ?   {
              transform: `rotate(${index * 10}deg)`,
            } : 
            {
                transform: `rotate(${(index + 2) * 10}deg)`,
              }
        }
            className={style.contentChar}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default RoundButton;
