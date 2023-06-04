
import style from "./sideNavCounter.module.scss";


interface FooProp {
  name?: string;
  counter: string;
}



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
