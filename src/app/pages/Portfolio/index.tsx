import { useState, useEffect, useRef, useMemo, useCallback, SetStateAction, Dispatch } from "react";
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
  id?: number;
  stargazers_count?: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  cardInView: { cardInView: CardInView[] };
  setCardInView?: { setCardInView: Dispatch<SetStateAction<CardInView[]>> };
  key?: number;
  // isNotRepo?: boolean;
}
interface Props {
  id: string;
  changeNav: (id: string) => void;
  setHeaderColor: (isBlack: HeaderColor) => void;
  // setLoading: (boolean: boolean) => void;
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

  
    
    const handleScroll = useCallback(
    (scrollAmount?: number) => {
      let element = projectListRef?.current;
      if (scrollAmount) {
        element?.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    },
    [projectListRef]
  );

  const validateDisableButton = useCallback(() => {
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
  }, []);

  useEffect(() => {
    fetchRepoData();
    validateDisableButton();
  }, []);

  useEffect(() => {
    if (componentInView) {
      changeNav(id);
      setHeaderColor({ black: false, transparent: false });
    }
  }, [componentInView, id]);

  const filteredRepositories: Repository[] = useMemo(() => {
    const metaData: Repository[] = [
   
      {
        name: "Rebijoux",
        description:
        "Rebijoux, a French company specializing in gold trade and transformation, prioritizes quality and sustainability by leveraging blockchain technology. As the website developer, I orchestrated the seamless integration of design and functionality, ensuring a polished online presence.",
        html_url: "https://rebijoux.fr",
        homepage: "https://rebijoux.fr",
        cardInView: { cardInView },
        setCardInView: { setCardInView },
        key: 0,
        // isNotRepo: true,
      },
      {
        name: "Aviva Housing",
        description:'Aviva Housing, based in Portugal, specializes in developing and selling residential properties. As the developer and designer of their website, I ensured a seamless user experience from design to functionality.'
          ,
        html_url: "https://www.avivahousing.com/",
        homepage: "https://www.avivahousing.com/",
        cardInView: { cardInView },
        setCardInView: { setCardInView },
        key: 0,
        // isNotRepo: true,
      },
      {
      name: "Fuze",
      description:
        "A profesional project developed for a British car rental company, undertaken in collaboration with Studio Graphene(my current company). I was part of an 8-member developer team tasked with constructing two software solutions. My role specifically revolved around frontend development.",
      html_url: "https://www.drivefuze.com/",
      homepage: "https://www.drivefuze.com/",
      cardInView: { cardInView },
      setCardInView: { setCardInView },
      key: 0,
      // isNotRepo: true,
    },
      
    ];
    const filteredRepos = repositories.filter((repo) => repo.stargazers_count !== 0);
    return [...metaData, ...filteredRepos];
  }, [repositories]);

  return (
    <div ref={myRef} id={id} className={style.portfolioBackground}>
      <section className={style.portfolio}>
        <SideNavCounter counter="02" name="Selected works" />
        <div
          ref={projectListRef}
          onScroll={() => {
            validateDisableButton();
          }}
          className={cx(style.portfolioSection, {
            [style.inView]: componentInView,
          })}
        >
          <p className={style.titleSection}>Selected works</p>

          <div className={style.projectList}>
           
            {filteredRepositories?.map(
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
                    key={index + 1}
                    // isNotRepo={repo.isNotRepo}
                  />
                )
            )}
          </div>
          <div className={style.bottomSection}>
            <div className={style.counter}>
              <p className={style.currentPage}>02</p>
              <p className={style.totalPages}>/5</p>
            </div>
            {/* <div className={style.indexCounter}>
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
            </div> */}
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
