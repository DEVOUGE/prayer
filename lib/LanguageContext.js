import { createContext } from "react";
export const LanguageContext = createContext();
export const LanguageProvider = ({setLang, setFont, children }) => {
  const value = {
    setLang,
    setFont,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};