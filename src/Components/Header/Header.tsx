import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [stickyNavbar, setStickyNavbar] = useState(false);

  const setSticky = () => {
    setStickyNavbar(window.scrollY >= 20);
  };

  window.addEventListener("scroll", setSticky);
  return (
    <>
      <header className={stickyNavbar ? "navbar-sticky" : ""}>
        <a className="logo" href="#">
          Sami Zakir Ahmed
        </a>
        <ul className="header-list">
          {["home", "about", "projects", "contact"].map((item: string) => {
            return (
              <li>
                <a className="underline" href={"#" + item}>
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
}
