import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";

import bigLogo from "../../resources/logo/arnhofdi-nav.png";
import smallLogo from "../../resources/logo/arnhofdi-small.png";

const Navigation = () => {
  let activeClassName = "text-maingold link max-md:hidden";
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // console.log('scrolling')
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`mx-auto relative inset-x-0 h-20 md:h-28 z-40 w-full bg-white transition-all duration-500 sticky ${
        visible || isNavOpen ? "top-0" : "-top-20 md:-top-28"
      } `}
    >
      <section className="MOBILE-MENU flex md:hidden">
        <div className="absolute left-0 mt-4 ml-6 z-20">
          <Hamburger
            toggled={isNavOpen}
            toggle={setIsNavOpen}
            color="#162135"
            direction="left"
            size={24}
          />
        </div>
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-left justify-start min-h-screen ml-5 mt-40 -space-y-4">
            <li className="nav-li">
              <NavLink to={`/#thjonusta`}>
                <button
                  className="link text-maindarkblue"
                  onClick={() => setIsNavOpen(false)}
                >
                  Þjónusta
                </button>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to={`/fyrri-verk`}
                className={({ isActive }) =>
                  isActive ? "text-maingold link" : "text-maindarkblue link"
                }
                onClick={() => setIsNavOpen(false)}
              >
                Fyrri verk
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to={`/hafdu-samband`}
                className={({ isActive }) =>
                  isActive ? "text-maingold link" : "text-maindarkblue link"
                }
                onClick={() => setIsNavOpen(false)}
              >
                Hafðu samband
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <div>
        <div className="logo-wrapper md:hidden">
          <div className="logo">
            <NavLink to={`/`}>
              <img className="logo" src={smallLogo} alt="Logo" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-xl flex md:mx-auto justify-center md:py-8 lg:py-6 px-6 xl:px-0">
        <NavLink to={`/`}>
          <img
            className="max-md:hidden w-32 md:w-48 lg:w-64 h-auto"
            src={bigLogo}
            alt="Logo"
          />
        </NavLink>
        <div className="flex space-x-4 lg:space-x-10 justify-between items-center ml-auto">
          <NavLink
            to={`/#thjonusta`}
            className="link text-slate-900 max-md:hidden"
          >
            Þjónusta
          </NavLink>
          <NavLink
            to={`/fyrri-verk`}
            className={({ isActive }) =>
              isActive ? activeClassName : "text-slate-900 link max-md:hidden"
            }
          >
            Fyrri verk
          </NavLink>
          <NavLink
            to={`/hafdu-samband`}
            className={({ isActive }) =>
              isActive ? activeClassName : "text-slate-900 link max-md:hidden"
            }
          >
            Hafðu samband
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
