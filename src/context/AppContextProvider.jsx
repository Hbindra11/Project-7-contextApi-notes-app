import { useState } from "react";
import { AppContext } from "./appContext.js";

function AppContextProvider({ children }) {
  const [note, setNote] = useState([]);
  const [editNote, setEditNote] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <AppContext.Provider
      value={{
        note,
        setNote,
        categories,
        setCategories,
        editNote,
        setEditNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
