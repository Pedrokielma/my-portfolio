// import { FiArrowLeft } from "react-icons/fi";
"use client";
import { useRouter } from "next/navigation";

import style from "./styles/not-found.module.scss";

export default function NotFound() {
  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  };

  return (
    <div className={style.notFound}>
      <div className={style.notFoundSection}>
        <div className={style.notFoundContainer}>
          <p className={style.errorName}>404 error</p>
          <p className={style.notFoundTitle}>Page not found</p>
          <p className={style.notFoundText}>
            Sorry, the page you are looking for doesn`t exist. <br />
            Here are some helpful links:
          </p>
          <div className={style.buttonSection}>
            {/* <a className={style.notFoundText}> 
          <FiArrowLeft />
          <span>Go back</span> 
          </a> */}
            <a
              className={style.buttonHome}
              onClick={() => {
                handleHomePage();
              }}
            >
              Take me home
            </a>
          </div>
        </div>
      </div>
      <div className={style.notFoundImage} />
    </div>
  );
}
