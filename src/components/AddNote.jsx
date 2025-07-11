import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeNotes } from "../modules/storage";
import { useAppContext } from "../context/appContext.js";
import SelectCategories from "./SelectCategories";

const AddNote = () => {
  const { note, setNote } = useAppContext();
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handelChange = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // Add selected categories and timestamp to the note before saving
    storeNotes({
      ...note,
      categories: selectedCategories.length ? selectedCategories : [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    setNote([]);
    // After saving, ensure latest note is first by navigating to all-notes (which sorts descending)
    navigate("/all-notes");
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
        {/* Pass selectedCategories and setter to SelectCategories */}
        <SelectCategories selected={selectedCategories} setSelected={setSelectedCategories} />
      </div>
    </>
  );
};

export default AddNote;
