import { useState, useEffect } from "react";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import RoundButton from "@/app/components/RoundButton/index";
import { fetchRepositories } from "../action";
import { useInView } from "react-intersection-observer";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useRef } from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

import style from "./portfolio.module.scss";
interface Repository {
  id: number;
  stargazers_count: number;
  name: String;
  html_url: string;
}
interface Props {
  id: string;
  changeNav: (id: string) => void;
}
const Portfolio = (props: Props) => {
  const { id, changeNav } = props;
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isScrollLeftDisabled, setIsScrollLeftDisabled] = useState(true);
  const [isScrollRightDisabled, setIsScrollRightDisabled] = useState(false);

  const projectListRef = useRef<HTMLDivElement>(null);
  const { ref: myRef, inView: componentInView } = useInView({
    threshold: 0.5,
  });

  const fetchRepoData = async () => {
    const userName = "Pedrokielma";
    const data: Repository[] = await fetchRepositories(userName);
    setRepositories(data);
  };
  useEffect(() => {
    fetchRepoData();
  }, []);

  useEffect(() => {
    if (componentInView) {
      changeNav(id);
    }
  }, [componentInView]);

  const handleScroll = (scrollAmount?: number) => {
    let element = projectListRef?.current;
    if (scrollAmount) {
      element?.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const validateDisableButton = () => {
    let element = projectListRef.current;
    let clientArea = element?.clientWidth;
    let scrollableArea = element?.scrollWidth;
    let totalArea =
      clientArea && scrollableArea ? scrollableArea - clientArea : null;
    let current = element?.scrollLeft;
    if (totalArea && current) {
      let isDisabled = totalArea - current;
      if (isDisabled < 100) {
        setIsScrollRightDisabled(true);
      } else {
        setIsScrollRightDisabled(false);
      }
      if (isDisabled > totalArea - 200) {
        setIsScrollLeftDisabled(true);
      } else {
        setIsScrollLeftDisabled(false);
      }
    }
  };

  return (
    <section ref={myRef} id={id} className={style.portfolio}>
      <SideNavCounter counter="02" name="Selected works" />
      <div
        ref={projectListRef}
        onScroll={() => {
          validateDisableButton();
        }}
        className={style.portfolioSection}
      >
        <div className={style.projectList}>
          {repositories
            ?.filter((repo) => repo.stargazers_count !== 0)
            .map(
              (repo, index) =>
                repo.stargazers_count != 0 && (
                  <div key={repo.id} className={style.itemCard}>
                    <a
                      href={repo.html_url}
                      className={style.item}
                      target="_blank"
                    >
                      <p className={style.number}>
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className={style.name}>{repo.name}</p>
                      <p className={style.description}>
                        Lorem ipsum dolor sit amet consectetur. Vitae laoreet
                        viverra dapibus adipiscing consectetur enim. Facilisis
                        dolor placerat mauris nulla aliquet tempus et. Diam
                        morbi et ut felis et sit massa vivamus.{" "}
                      </p>
                      <div className={style.roundButton}>
                        <RoundButton size="small" content="VIEW" />
                      </div>
                    </a>
                  </div>
                )
            )}
        </div>
        <div className={style.buttonsList}>
          <div
            onClick={() => {
              handleScroll(-350);
            }}
            className={cx(style.leftButton, {
              [style.isDisabled]: isScrollLeftDisabled,
            })}
          >
            {" "}
            <RiArrowLeftSLine />
          </div>
          <div
            onClick={() => {
              handleScroll(350);
            }}
            className={cx(style.rightButton, {
              [style.isDisabled]: isScrollRightDisabled,
            })}
          >
            {" "}
            <RiArrowRightSLine />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
