import { useState } from "react";
import { AppContext } from "./AppContext";

function AppContextProvider({ children }) {
  const [note, setNote] = useState("");
  const [categories, setCategories] = useState([]);
  return (
    <AppContext.Provider value={{ note, setNote,categories, setCategories }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
