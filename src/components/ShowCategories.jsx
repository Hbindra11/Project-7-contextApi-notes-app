import { fetchCategories } from "../modules/storage";
import { deleteACategory } from "../modules/storage";
import { useNavigate } from "react-router-dom";

const ShowCategories = () => {
  const AllCategories = fetchCategories();
  const navigate = useNavigate();

  return (
    <>
      <div className="ml-32">
        <h2 className="text-slate-50 font-semibold">Categories: </h2>

        <div className=" card  bg-slate-50 p-5">
          <ul>
            <li> Miscellaneous</li>
            {AllCategories.map((aCategory) => (
              <li key={crypto.randomUUID()} className="flex justify-between">
                <span>{aCategory.category}</span>
                <button
                  className="btn btn-square btn-sm"
                  onClick={() => {
                    //console.log(aCategory.category);
                    deleteACategory(aCategory.category);
                    navigate("/categories");
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
