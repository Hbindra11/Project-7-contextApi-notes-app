import { useAppContext } from "../context/AppContext";
import { storeNotes } from "../modules/storage";
const AddNote = () => {
  const { note, setNote } = useAppContext();

  const handelChange = (e) => {
    setNote((prev) => ({...prev, [e.target.name]: e.target.value} ));
   
  };

  const handelSubmit = () => {
    //e.preventDefault();
    storeNotes(note);
     
  };

  return (
    <>
      <div className="font-medium p-24 flex justify-center ">
        <div>
          <h2 className="text-2xl">Add a Note</h2>
          <br></br>
          <form onSubmit={handelSubmit}>
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Title: </span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-accent w-full max-w-xs "
                name="title"
                onChange={handelChange}
                required
              ></input>
            </label>
            <br></br>
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Note: </span>
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
      </div>
    </>
  );
};

export default AddNote;
