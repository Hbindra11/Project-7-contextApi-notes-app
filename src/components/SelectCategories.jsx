import { fetchCategories } from "../modules/storage";
const SelectCategories = () => {
  const AllCategories = fetchCategories();
  return (
    <>
      <fieldset className="text-slate-50">
        <legend className="font-bold text-lg">Choose your categories:</legend>
<br></br>
        <div>
          {AllCategories.map((aCategory) => (
            <li
              key={crypto.randomUUID()}
              className="flex items-center mb-2 justify-between"
            >
              <input
                type="checkbox"
                //checked={}
                //onChange={}
                className="mr-2"
              />
              {aCategory.category}
            </li>
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default SelectCategories;
