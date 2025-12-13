import "./style/btnMenu.css";
import React, { useState, useEffect } from "react";

const BtnMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    const navMenu = document.querySelector("#navMenu");
    if (navMenu) {
      activeMenu
        ? navMenu.classList.add("activeMenu")
        : navMenu.classList.remove("activeMenu");
    }
  }, [activeMenu]);

  return (
    <>
      <button onClick={() => setActiveMenu(!activeMenu)}>
        <span></span>
      </button>
    </>
  );
};

export default BtnMenu;
