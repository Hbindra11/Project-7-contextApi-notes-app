import { useState } from "react";
import { AppContext } from "./AppContext";

function AppContextProvider({ children }) {
  const [note, setNote] = useState([]);
  const [editNote, setEditNote] = useState([]);
  const [categories, setCategories] = useState([]);

  // const someCategories = ["to do", "school"];
  // useEffect(() => setCategories(someCategories));

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
