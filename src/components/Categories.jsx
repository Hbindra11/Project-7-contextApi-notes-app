import { useAppContext } from "../context/AppContext";
import { storeCategories } from "../modules/storage";
const Categories = () => {
  const { categories, setCategories } = useAppContext();

  const handelChange = (e) => {
    setCategories(() => e.target.value );
    //console.log(e.target.value);
  };
  const handelSubmit = () => {
    //e.preventDefault();
    storeCategories(categories);
  };
  return (
    <>
      <div className="font-medium p-24 flex justify-center ">
        <div>
          <h2 className="text-2xl">Add Categories</h2>
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
              <button type="submit" className="btn btn-active btn-accent">
                Save
              </button>
            </label>
            {/* <ul> need to create a component to render a list of categories here!

            </ul> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Categories;
