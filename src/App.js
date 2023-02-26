import "./index.css";
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navigation from "./components/Navigation";
import FrontPage from "./Views/FrontPage";
import Footer from "./components/Footer";
import FyrriVerk from "./Views/FyrriVerk";
import ContactPageView from "./Views/ContactPage";

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        // const yOffset = -100;
        const element = document.getElementById(id);
        const pos = element.style.position;
        const top = element.style.top;
        element.style.position = "relative";
        element.style.top = "-150px";
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          element.style.top = top;
          element.style.position = pos;
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route
          activeClassName="text-maingold"
          exact
          path="/fyrri-verk"
          element={<FyrriVerk />}
        />
        <Route
          activeClassName="text-maingold"
          exact
          path="/hafdu-samband"
          element={<ContactPageView />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
