//import { useAppContext } from "../context/AppContext";
import { fetchCategories } from "../modules/storage";

const ShowCategories = () => {
  //const { categories } = useAppContext();
  const AllCategories = fetchCategories();

  // console.log(AllCategories);
  return (
    <>
      <div className="ml-32">
        <h2 className="text-slate-50 font-semibold">Categories: </h2>
        
        <div className=" card  bg-slate-50 p-5">
          <ul>
            {AllCategories.map((aCategory) => (
              <li key={crypto.randomUUID()} className="flex justify-between">
                <span >{aCategory.category}</span>
                <button
                  className="btn btn-square btn-sm"
                  onClick={() => {
                    //deleteANote(aNote.title, aNote.content);
                    //navigate("/");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShowCategories;
