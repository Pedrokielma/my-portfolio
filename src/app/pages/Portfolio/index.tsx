import { useState, useEffect, useRef } from "react";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import PortfolioCard from "@/app/components/PortfolioCard/index";
import { fetchRepositories } from "../action";
import { useInView } from "react-intersection-observer";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

import style from "./portfolio.module.scss";

interface HeaderColor {
  transparent: boolean;
  black: boolean;
}
interface Repository {
  id: number;
  stargazers_count: number;
  name: String;
  html_url: string;
  description: string;
  homepage: string;
}
interface Props {
  id: string;
  changeNav: (id: string) => void;
  setHeaderColor: (isBlack: HeaderColor) => void;
}

interface CardInView {
  [key: number]: boolean;
}

const Portfolio = (props: Props) => {
  const { id, changeNav, setHeaderColor } = props;
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isScrollLeftDisabled, setIsScrollLeftDisabled] = useState(true);
  const [isScrollRightDisabled, setIsScrollRightDisabled] = useState(false);
  const [cardInView, setCardInView] = useState<CardInView[]>([]);

  const projectListRef = useRef<HTMLDivElement>(null);
  const { ref: myRef, inView: componentInView } = useInView({
    threshold: 0.5,
  });

  const fetchRepoData = async () => {
    const userName = "Pedrokielma";
    const data: Repository[] = await fetchRepositories(userName);
    setRepositories(data);
  };

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
    if (totalArea && current && clientArea && scrollableArea) {
      let isDisabled = totalArea - current;
      if (isDisabled < 30) {
        setIsScrollRightDisabled(true);
      } else {
        setIsScrollRightDisabled(false);
      }
      if (isDisabled > totalArea - 10) {
        setIsScrollLeftDisabled(true);
      } else {
        setIsScrollLeftDisabled(false);
      }
    }
  };
  useEffect(() => {
    fetchRepoData();
    validateDisableButton();
  }, []);

  useEffect(() => {
    if (componentInView) {
      changeNav(id);
      setHeaderColor({ black: false, transparent: false });
    }
  }, [componentInView, changeNav, id, setHeaderColor]);

  return (
    <div ref={myRef} id={id} className={style.portfolioBackground}>
      <section className={style.portfolio}>
        <SideNavCounter counter="02" name="Selected works" />
        <div
          ref={projectListRef}
          onScroll={() => {
            validateDisableButton();
          }}
          className={style.portfolioSection}
        >
          <p className={style.titleSection}>Selected works</p>

          <div className={style.projectList}>
            {repositories
              ?.filter((repo) => repo.stargazers_count !== 0)
              .map(
                (repo, index) =>
                  repo.stargazers_count != 0 && (
                    <PortfolioCard
                      index={index}
                      name={repo.name}
                      description={repo.description}
                      html_url={repo.html_url}
                      page={repo.homepage}
                      cardInView={cardInView}
                      setCardInView={setCardInView}
                      key={index}
                    />
                  )
              )}
          </div>
          <div className={style.bottomSection}>
            <div className={style.counter}>
              <p className={style.currentPage}>02</p>
              <p className={style.totalPages}>/5</p>
            </div>
            <div className={style.indexCounter}>
              {cardInView.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={cx(style.itemCard, {
                      [style.inView]: Object.values(item)[0],
                    })}
                  ></div>
                );
              })}
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
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
