import "./Header.css";
import "../../App.css";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Name from "./Name/Name";
import HeaderItem from "./HeaderItem/HeaderItem";

export default function Header() {
  const default_selectedHeader = {
    home: false,
    about: false,
    projects: false,
    skills: false,
    contact: false,
  };

  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isHeaderSelected, setIsHeaderSelected] = useState(
    default_selectedHeader
  );

  const setSticky = () => {
    setStickyNavbar(window.scrollY >= 20);
  };

  window.addEventListener("scroll", setSticky);

  return (
    <>
      <header className={"qIYQfQ" + (stickyNavbar ? " navbar-sticky" : "")}>
        <Name />
        <ul className="header-list">
          <HeaderItem
            isHeaderSelected={isHeaderSelected}
            setIsHeaderSelected={setIsHeaderSelected}
            default_selectedHeader={default_selectedHeader}
          />
        </ul>

        <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />

        <div
          className={
            "header-menu" +
            (isActive ? " is-active" : "") +
            (stickyNavbar ? " navbar-sticky-test" : "")
          }
        >
          <ul className="compact-header-list">
            <HeaderItem
              isHeaderSelected={isHeaderSelected}
              setIsHeaderSelected={setIsHeaderSelected}
              default_selectedHeader={default_selectedHeader}
            />
          </ul>
        </div>
      </header>
    </>
  );
}
