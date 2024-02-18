import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getData,storeData } from "./Storage";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);
  getData("lang").then((language) => setLanguage(language));

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { language, setLanguage } = React.useContext(LanguageContext);
  return { language, setLanguage };
};