import { useAppContext } from "../context/AppContext";

const AddNote = () => {
  const { setNote } = useAppContext();

  const handelChange = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  console.log(e.target.value)};
  return (
    <>
      <div className="font-medium p-24 flex justify-center ">
        <div>
          <h2 className="text-2xl">Add a Note</h2>
          <br></br>
          <form>
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Title: </span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-accent w-full max-w-xs "
                name="title"
                onChange={handelChange}
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
              ></textarea>
            </label>
            <br></br>
            <button className="btn btn-accent">Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNote;
