
// import { useState } from 'react';
// import classNames from "classnames/bind";

// const cx = classNames.bind(style);
import SideNavCounter from '@/app/components/SideNavCounter/index';
import style from './homePage.module.scss';

interface Props {
  id: string
}

const HomePage = (props: Props) => {
//   const [open, setOpen] = useState(false);
const {id} = props;
  return (
   <div id={id} className={style.homePage}>
    <SideNavCounter counter='01'/>
    <div className={style.homePagesection}>
        <h1>Hi, I’m <br/> Pedro <br/> Kielmanowicz</h1>
        <p>Frontend developer</p>
    </div>
   </div>
  );
};

export default HomePage;
