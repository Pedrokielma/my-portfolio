"use client";
import { useState } from "react";
import Header from "./components/Header/index";
import NavBar from "./components/NavBar/index";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio/index";
import About from "./pages/About/index";
import Skill from "./pages/Skill/index";
import Contact from "./pages/Contact/index";

interface HeaderColor{
  transparent:boolean,
  black: boolean,
}


export default function Home() {
  const [activeLink, setActiveLink] = useState("");
  const [headerColor, setHeaderColor] = useState<HeaderColor>(
    {
      transparent: true,
      black: false,
    }
  );
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
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
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
        />
        <Portfolio changeNav={changeNav} id="2" />
        <About changeNav={changeNav} id="3" />
        <Skill changeNav={changeNav} id="4" />
        <Contact changeNav={changeNav} id="5" headerColor={headerColor} setHeaderColor={setHeaderColor}/>
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
