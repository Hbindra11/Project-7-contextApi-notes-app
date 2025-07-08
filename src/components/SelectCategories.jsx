import { fetchCategories } from "../modules/storage";

const SelectCategories = ({ selected = [], setSelected }) => {
  const AllCategories = fetchCategories();

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <fieldset className="text-slate-50">
        <legend className="font-bold text-lg">Choose your categories:</legend>
        <br />
        <div>
          {AllCategories.map((aCategory) => (
            <li
              key={aCategory.category}
              className="flex items-center mb-2 justify-between"
            >
              <input
                type="checkbox"
                value={aCategory.category}
                checked={selected.includes(aCategory.category)}
                onChange={handleChange}
                className="mr-2"
              />
              {aCategory.category}
            </li>
          ))}
        </div>
        {/* Example: show selected categories */}
        <div className="mt-4 text-slate-200">
          Selected: {selected.join(", ")}
        </div>
      </fieldset>
    </>
  );
};

export default SelectCategories;
