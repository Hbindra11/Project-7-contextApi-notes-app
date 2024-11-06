import { Link } from "react-router-dom"; // Import required components and functions

// This component simply renders a navigation bar
const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* The Link component takes care of updating the history in the browser */}
        <Link to="/" className="text-white text-lg font-bold no-underline">
          Notes App
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/addnote" className="text-gray-300 hover:text-white">
            +Note
          </Link>
          {/*} <Link
            to="/anewcategory"
            className="text-gray-300 hover:text-white"
          >
            Add A New Category
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
