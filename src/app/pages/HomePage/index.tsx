
import { useEffect } from 'react';
import SideNavCounter from '@/app/components/SideNavCounter/index';
import { useInView } from 'react-intersection-observer';
import style from './homePage.module.scss';

interface Props {
  id: string
  changeNav: (id: string) => void,
}

const HomePage = (props: Props) => {
const {id, changeNav} = props;
const { ref, inView } = useInView({
  threshold: 0.5,
});

useEffect(() => {
  if(inView){
    changeNav(id)
  }
}, [inView]);

  return (
   <div ref={ref} id={id} className={style.homePage}>
    <SideNavCounter counter='01'/>
    <div className={style.homePagesection}>
        <h1>Hi, I’m <br/> Pedro <br/> Kielmanowicz</h1>
        <p>Frontend developer</p>
    </div>
   </div>
  );
};

export default HomePage;
