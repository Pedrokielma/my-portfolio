
// import { FiArrowLeft } from "react-icons/fi";
import style from "./styles/not-found.module.scss";

export default function NotFound() {

  
    return (
      <div className={style.notFound}>
        <div className={style.notFoundSection}>
        <p className={style.errorName}>404 error</p>
        <p className={style.notFoundTitle}>Page not found</p>
        <p className={style.notFoundText}>Sorry, the page you are looking for doesn`t exist. <br />Here are some helpful links:</p>
        <div>
          {/* <a className={style.notFoundText}> 
          <FiArrowLeft />
          <span>Go back</span> 
          </a> */}
          <a className={style.buttonHome}>Take me home</a>
        </div>


        </div>
        <div className={style.notFoundImage}/>
      </div>
    );
  }