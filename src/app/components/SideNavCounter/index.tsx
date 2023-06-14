import classNames from "classnames/bind";
const cx = classNames.bind(style);

import style from "./sideNavCounter.module.scss";

interface FooProp {
  name?: string;
  counter: string;
}

const SideNavCounter = (props: FooProp) => {
  const { name, counter } = props;

  return (
    <div className={style.sideNavCounter}>
      <p className={style.nameSection}>{name}</p>
      <div className={cx(style.counter, { [style.black]: counter === "01" })}>
        <p className={style.currentPage}>{counter}</p>
        <p className={style.totalPages}>/5</p>
      </div>
    </div>
  );
};

export default SideNavCounter;
