"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header/index";
import NavBar from "./components/NavBar/index";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio/index";
import About from "./pages/About/index";
import Skill from "./pages/Skill/index";
import Contact from "./pages/Contact/index";
import BeatLoader from "react-spinners/BeatLoader";

import classNames from "classnames/bind";
const cx = classNames.bind(style);

import style from "./styles/layout.module.scss";

interface HeaderColor {
  transparent: boolean;
  black: boolean;
}

export default function Home() {
  const [activeLink, setActiveLink] = useState("");
  const [loading, setLoading] = useState(true);

  const [headerColor, setHeaderColor] = useState<HeaderColor>({
    transparent: true,
    black: false,
  });
  const [openNav, setOpenNav] = useState(false);

  const changeNav = (id: string) => {
    setActiveLink(id);
  };

  const closeNav = () => {
    if (openNav) {
      setOpenNav(false);
    }
  };

  const handleRouteChange = (componentId: string) => {
    const yOffset = -80; // Adjust this value as needed to offset the header height
    const element = document.getElementById(componentId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoading(false)
  //   }, 1000)
  // },[])

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <div className={cx(style.loaderContainer, !loading && style.hideLoader)}>
        <div className={style.lottieAnimation}>
        <BeatLoader color={'#E3F88F'} size={80} loading={loading} />
        </div>
      </div>
      <main
        onClick={() => {
          closeNav();
        }}
      >
        <Header
          openNav={openNav}
          setOpenNav={setOpenNav}
          activeLink={activeLink}
          headerColor={headerColor}
          handleRouteChange={handleRouteChange}
        />
        <div className="page">
          <HomePage
            setHeaderColor={setHeaderColor}
            headerColor={headerColor}
            changeNav={changeNav}
            id="1"
            handleRouteChange={handleRouteChange}
          />0
          <Portfolio
            changeNav={changeNav}
            id="2"
            setHeaderColor={setHeaderColor}
          />
          <About changeNav={changeNav} id="3" setHeaderColor={setHeaderColor} />
          <Skill changeNav={changeNav} id="4" setHeaderColor={setHeaderColor} />
          <Contact
            changeNav={changeNav}
            id="5"
            headerColor={headerColor}
            setHeaderColor={setHeaderColor}
          />
        </div>
      </main>
      <NavBar
        openNav={openNav}
        setOpenNav={setOpenNav}
        activeLink={activeLink}
      />
    </>
  );
}
