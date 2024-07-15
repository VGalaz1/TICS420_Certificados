

// SWITCHER LENGUAJE
import React from "react";
import { useTranslation } from "react-i18next";

import "../i18next";
import en from "../img/english.png";
import es from "../img/spanish.png";

export const Switcher = () => {

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="overflow-x-auto flex flex-row space-x-4">
      <button onClick={() => changeLanguage("en")}>
        <img src={en} style={{ width: "20px", height: "20px" }} />
      </button>
      <button onClick={() => changeLanguage("es")}>
        <img src={es} style={{ width: "20px", height: "20px" }} />
      </button>
    </div>
  );
};

export default Switcher;