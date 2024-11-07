import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

function AppContextProvider({ children }) {
  const [note, setNote] = useState([]);
  const [categories, setCategories] = useState("");
  
 // const someCategories = ["to do", "school"];
 // useEffect(() => setCategories(someCategories));

  return (
    <AppContext.Provider value={{ note, setNote, categories, setCategories }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
