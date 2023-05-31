
// import { useState } from 'react';
// import classNames from "classnames/bind";

// const cx = classNames.bind(style);
import SideNavCounter from '@/app/components/SideNavCounter/index';
import style from './homePage.module.scss';


const HomePage: React.FC = () => {
//   const [open, setOpen] = useState(false);

  return (
   <div className={style.homePage}>
    <SideNavCounter />
   </div>
  );
};

export default HomePage;
