"use client";

import React, { SetStateAction } from "react";

type ContextProps = {
  isMenuClicked: boolean;
  setIsMenuClicked: React.Dispatch<SetStateAction<boolean>>;
  featuresClick: boolean;
  setFeaturesClick: React.Dispatch<SetStateAction<boolean>>;
  isScrolled: boolean;
  setIsScrolled: React.Dispatch<SetStateAction<boolean>>;
  authClick: boolean;
  setAuthClick: React.Dispatch<SetStateAction<boolean>>;
  loginBtn: boolean;
  setLoginBtn: React.Dispatch<SetStateAction<boolean>>;
  globalSearchValue: string;
  setGlobalSearchValue: React.Dispatch<SetStateAction<string>>;
};

const GlobalContext = React.createContext<ContextProps>({
  isMenuClicked: false,
  setIsMenuClicked: () => {},
  isScrolled: false,
  setIsScrolled: () => {},
  featuresClick: false,
  setFeaturesClick: () => {},
  authClick: true,
  setAuthClick: () => {},
  loginBtn: false,
  setLoginBtn: () => {},
  globalSearchValue: "",
  setGlobalSearchValue: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [isMenuClicked, setIsMenuClicked] = React.useState(false);
  const [featuresClick, setFeaturesClick] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [authClick, setAuthClick] = React.useState(true);
  const [loginBtn, setLoginBtn] = React.useState(true);
  const [globalSearchValue, setGlobalSearchValue] = React.useState("");

  return (
    <GlobalContext.Provider
      value={{
        isMenuClicked,
        setIsMenuClicked,
        featuresClick,
        setFeaturesClick,
        authClick,
        setAuthClick,
        loginBtn,
        setLoginBtn,
        isScrolled,
        setIsScrolled,
        globalSearchValue,
        setGlobalSearchValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => React.useContext(GlobalContext);
