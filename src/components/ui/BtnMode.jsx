import React, { useState, useEffect } from "react";
import "./style/btnMode.css";

const BtnMode = () => {
  /*
  Constante que almacena el valor boleno que activa o desactiva el modo nocturno de la página
  este es un valor persistence, ya que se obtiene de local storage
  */
  const [activeCheck, setActiveCheck] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    if (activeCheck) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", activeCheck); //guardamos el valor en local storage
  }, [activeCheck]); //dependencia de la constante activeCheck

  return (
    <>
      <input
        className="checkMode"
        type="checkbox"
        checked={activeCheck}
        onChange={(e) => setActiveCheck(e.target.checked)}
      />
    </>
  );
};

export default BtnMode;
