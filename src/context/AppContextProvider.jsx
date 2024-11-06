import { useState } from "react";
import { AppContext } from "./AppContext";

function AppContextProvider({ children }) {
  const [note, setNote] = useState("");
  return (
    <AppContext.Provider value={{ note, setNote }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
