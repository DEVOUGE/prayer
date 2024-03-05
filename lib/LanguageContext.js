import { createContext } from "react";
export const LanguageContext = createContext();
export const LanguageProvider = ({setLang, children }) => {
  const value = {
    setLang,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};