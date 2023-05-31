
import style from "./sideNavCounter.module.scss";
import { useState } from 'react';
import classNames from "classnames/bind";





const SideNavCounter = () => {

  return (
    <div className={style.sideNavCounter}>
      <div>
        1/6
      </div>
    </div>
  );
};

export default SideNavCounter;
