import React from "react";

function SelectedFilters({ newFilters, state, setNewFilters }) {
  const handleClick = (e) => {
    const targetFilter = e.target.outerText.toLowerCase();
    console.log(targetFilter);
    state.filters.delete(targetFilter);
    //! aggiorna lo stato newFilters (questo array che riesco a mappare)
    //! ridondante ma non trovo soluzione funzionante migliore
    setNewFilters([...state.filters]);
  };

  return (
    <ul className="flex flex-wrap gap-1 justify-end">
      {newFilters.map((newFilter) => {
        return (
          <li
            key={newFilter}
            className={`${newFilter === "economy" && "bg-economy"} ${
              newFilter === "entrepreneurship" && "bg-entrepreneurship"
            }
${newFilter === "training" && "bg-training"}
${
  newFilter === "operation" && "bg-operation"
} flex items-center gap-2 px-2 py-1 text-white rounded-full`}
            onClick={(e) => handleClick(e)}
          >
            {/* nome categoria */}
            <span>{newFilter[0].toUpperCase() + newFilter.substring(1)}</span>
            {/* icona x */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="inline w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>
        );
      })}
    </ul>
  );
}

export default SelectedFilters;
