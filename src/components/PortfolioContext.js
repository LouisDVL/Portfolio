import React, { useContext, useReducer } from "react";
import PageReducerContext from "./PageReducerContext";

export const PortfolioContext = React.createContext(null);

const initialState = {
  work: true,
  contact: false,
};

export function PortfolioContextProvider(props) {
  const [pageState, pageDispatch] = useReducer(
    PageReducerContext,
    initialState
  );

  const contextValue = {
    pageState,
    pageDispatch,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {props.children}
    </PortfolioContext.Provider>
  );
}

export function usePageContext() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error(
      "usePageContext can only be used in childrens of PortfolioContextProvider. Wrap your parent element with <PortfolioContextProvider></PortfolioContextProvider>"
    );
  }
  return context;
}
