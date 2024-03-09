import React, { useState, useEffect } from "react";
import FontSizeContext from "./FontSizeContext";
import { getData } from "./Storage";

const FontSizeProvider = ({ children }) => {
   const [newFontSize, setNewFontSize] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAddedFontSize();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  async function fetchAddedFontSize() {
    await getData("addedFontSize").then(async (size) => {
      const parsed = JSON.parse(size);
      setNewFontSize(parsed) ;
    });
  }

  return (
    <FontSizeContext.Provider value={{ newFontSize, fetchAddedFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export default FontSizeProvider;
