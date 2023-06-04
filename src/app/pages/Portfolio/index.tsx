import { useState, useEffect } from "react";
import SideNavCounter from "@/app/components/SideNavCounter/index";
import { fetchRepositories } from "../action";

import style from "./portfolio.module.scss";

interface Repository {
  id: number;
  stargazers_count: number;
  name: String;
  html_url: string;
}

const Portfolio = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const fetchRepoData = async () => {
    const userName = "Pedrokielma";
    const data: Repository[] = await fetchRepositories(userName);
    setRepositories(data);
  };
  useEffect(() => {
    fetchRepoData();
  }, []);

  return (
    <div className={style.portfolio}>
      <SideNavCounter counter="02" name="Selected works" />
      <div className={style.portfolioSection}>
        <div className={style.projectList}>
          {repositories?.map(
            (repo, index) =>
              repo.stargazers_count != 0 && (
                <a href={repo.html_url} className={style.item} key={repo.id}>
                  <p className={style.number}>{String(index + 1).padStart(2, "0")}</p>

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
