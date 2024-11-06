import { createContext, useContext } from "react";
//context is created using createContext(). It returns a Context object that has
//Context.Provider a React component that takes a value property that becomes the value of the context, it can wrap children that will have access to the context.
const AppContext = createContext();

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppContextProvider");
  return context;
};

export { AppContext, useAppContext };
