import { useAppContext } from "../context/appContext.js";
import { storeCategories } from "../modules/storage";
import ShowCategories from "./ShowCategories";
const AddCategory = () => {
  const { categories, setCategories } = useAppContext();

  const handelChange = (e) => {
    setCategories(() => ({ [e.target.name]: e.target.value }));
    //console.log(e.target.value);
  };
  const handelSubmit = () => {
    //e.preventDefault();
    storeCategories(categories);
    window.location.reload(); // Refresh page to show new category in checklist
  };
  return (
    <>
      <div className="font-medium p-56 flex  justify-center bg-stone-900">
        <div>
          <h2 className="text-2xl text-slate-50">Add A Category:</h2>
          <br></br>
          <form onSubmit={handelSubmit}>
            <label className="form-control">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-accent w-full max-w-xs "
                name="category"
                onChange={handelChange}
                required
              />
            </label>
            <br></br>
            <button type="submit" className="btn btn-active btn-accent">
              Save
            </button>
            {/* <ul> need to create a component to render a list of categories here!

            </ul> */}
          </form>
        </div>
        <ShowCategories />
      </div>
    </>
  );
};

export default AddCategory;
