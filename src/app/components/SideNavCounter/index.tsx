
import style from "./sideNavCounter.module.scss";
import { useState } from 'react';
import classNames from "classnames/bind";


interface FooProp {
  name?: string;
  counter: string;
}

const env = process.env.NEXT_PUBLIC_GIT_HUB_TOKEN;
console.log('ENV', env);



const SideNavCounter = (props: FooProp) => {
const {name, counter} = props;
  return (
    <div className={style.sideNavCounter}>
      <p className={style.nameSection}>{name}</p>
      <div className={style.counter}>
       <p className={style.currentPage}>{counter}</p>
       <p className={style.totalPages}>/6</p>       
      </div>
    </div>
  );
};

export default SideNavCounter;
