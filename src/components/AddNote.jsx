import { useAppContext } from "../context/AppContext.js";
import { storeNotes } from "../modules/storage";
import { useNavigate } from "react-router-dom";
import SelectCategories from "./SelectCategories";

const AddNote = () => {
  const { note, setNote } = useAppContext();
  const navigate = useNavigate();

  const handelChange = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value,"categories": []}));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    storeNotes(note);
    setNote([]);
    navigate("/");
  };

  return (
    <>
      <div className="font-medium  p-36 flex justify-center  bg-stone-900 ">
        <div className="mr-24">
          <h2 className="text-2xl text-slate-50">Add a Note:</h2>
          <br></br>
          <form onSubmit={handelSubmit}>
            <label className="form-control w-full max-w-xs  ">
              <span className="label-text text-slate-50">Title: </span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-accent w-full max-w-md "
                name="title"
                onChange={handelChange}
                required
              ></input>
            </label>
            <br></br>
            <label className="form-control w-full max-w-xs">
              <span className="label-text text-slate-50">Note: </span>
              <textarea
                placeholder="Type here"
                className="textarea textarea-accent"
                name="content"
                onChange={handelChange}
                required
              ></textarea>
            </label>
            <br></br>
            <button type="submit" className="btn btn-accent">
              Save
            </button>
          </form>
        </div>
        <SelectCategories />
      </div>
    </>
  );
};

export default AddNote;
