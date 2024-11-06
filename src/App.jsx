import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"; // Import required components and functions

import Layout from "./components/Layout";
import Home from "./components/Home";
import AddNote from "./components/AddNote";
import AppContextProvider from "./context/AppContextProvider";
//import About from './components/About';

// Our App component now simply returns the Router we created
const App = () => {
  /*
We create our router by nesting Route components in a tree-like structure
1. In this structure, the base path "/" which is the root of our app, will match and render MainLayout
2. The first route is marked as "index" which means it's the base route for that segment of the tree
3. Any change on the navigation bar, i.e. the history in the browser, will cause the router to pick a matching
route
4. If no matching route is found, an error is thrown. We can handle this error.
*/
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="addnote" element={<AddNote />} />
        {/*<Route path="contact" element={<Contact />} /> */}
      </Route>
    )
  );
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

export default App;
