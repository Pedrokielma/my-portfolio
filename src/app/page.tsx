"use client";
import { useState } from "react";
import Header from "./components/Header/index";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio/index";
import About from "./pages/About/index";
import Skill from "./pages/Skill/index";
import Insight from "./pages/Insight/index";
import Contact from "./pages/Contact/index";

export default function Home() {
  const [activeLink, setActiveLink] = useState("");
  const [blackHeader, setBlackHeader] = useState(true);

  const changeNav = (id: string) => {
    setActiveLink(id);
  };
  const changeHeaderColor = (isBlack: boolean) => {
    setBlackHeader(isBlack);
  };

  return (
    <main>
      <Header activeLink={activeLink} blackHeader={blackHeader} />
      <HomePage
        changeHeaderColor={changeHeaderColor}
        changeNav={changeNav}
        id="1"
      />
      <Portfolio changeNav={changeNav} id="2" />
      <About changeNav={changeNav} id="3" />
      <Skill changeNav={changeNav} id="4" />
      <Insight changeNav={changeNav} id="5" />
      <Contact changeNav={changeNav} id="6" />
    </main>
  );
}
