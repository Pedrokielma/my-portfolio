import { useState, useEffect } from "react";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import { fetchRepositories } from "../action";
import { useInView } from "react-intersection-observer";
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

  return (
    <div ref={myRef} id={id} className={style.portfolio}>
      <SideNavCounter counter="02" name="Selected works" />
      <div className={style.portfolioSection}>
        <div className={style.projectList}>
          {repositories?.map(
            (repo, index) =>
              repo.stargazers_count != 0 && (
                <a href={repo.html_url} className={style.item} key={repo.id}>
                  <p className={style.number}>
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className={style.name}>{repo.name}</p>
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
