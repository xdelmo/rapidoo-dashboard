import React, { useState, useCallback } from "react";

function Filter({ meetings, handleClick }) {
  // categorie appuntamenti
  const categories = ["entrepreneurship", "economy", "training", "operation"];

  // stato per filtrare i meetings per categoria
  const [state, setState] = useState({
    newMeetings: meetings,
    filters: new Set(),
  });

  // const handleFilterChange = useCallback(
  //   (event) => {
  //     setState((previousState) => {
  //       let filters = new Set(previousState.filters);
  //       let newMeetings = meetings;

  //       if (event.target.checked) {
  //         filters.add(event.target.value);
  //       } else {
  //         filters.delete(event.target.value);
  //       }

  //       if (filters.size) {
  //         newMeetings = newMeetings.filter((product) => {
  //           return filters.has(product.category);
  //         });
  //       }

  //       return {
  //         filters,
  //         newMeetings,
  //       };
  //     });
  //   },
  //   [setState]
  // );

  //! stato ulteriore perchè non riesco a mappare l'oggetto Set() anche avendolo convertito in array
  const [newFilters, setNewFilters] = React.useState([]);

  // funzione per aggiornare le categorie selezionate nella tendina
  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked", { event });
      // aggiunge la checkbox al set
      state.filters.add(event.target.value);
      //! aggiorna lo stato newFilters (questo array che riesco a mappare)
      //! ridondante ma non trovo soluzione funzionante migliore
      setNewFilters([...state.filters]);
    } else {
      console.log("⛔️ Checkbox is NOT checked");
      // elimina la checkbox dal set
      state.filters.delete(event.target.value);
      //! aggiorna lo stato newFilters (questo array che riesco a mappare)
      //! ridondante ma non trovo soluzione funzionante migliore
      setNewFilters([...state.filters]);
    }
  };

  return (
    <section
      className="filters absolute top-1 right-0 z-20 max-w-[281px] lg:max-w-none"
      aria-labelledby="filters-header"
    >
      {/* div bianco contenente le categorie */}
      <div className="bg-white border-[1px] border-solid border-accentLight rounded-md px-4 py-2 mb-2 text-xs flex items-center justify-between">
        {/* lista delle categorie scelte dall'utente */}
        <ul className="flex flex-wrap gap-1">
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
              >
                {/* nome categoria */}
                <span>
                  {newFilter[0].toUpperCase() + newFilter.substring(1)}
                </span>
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
        <span
          className="ml-4 font-semibold cursor-pointer"
          onClick={handleClick}
        >
          Salva
        </span>
      </div>

      {/* lista di scelta delle categorie tramite checkbox */}
      <ul className="bg-white border-[1px] border-solid border-accentLight rounded-md">
        {/* mappaggio delle varie categorie dinamiche */}
        {categories.map((category) => (
          <li
            key={category}
            className="flex items-center gap-1 px-5 py-4 text-accentParagraph"
          >
            <div
              className={`${category === "economy" && "bg-economy"} ${
                category === "entrepreneurship" && "bg-entrepreneurship"
              }
      ${category === "training" && "bg-training"}
      ${category === "operation" && "bg-operation"} w-2 h-2 rounded-full`}
            ></div>
            {/* checkbox categoria */}
            <label className="text-sm cursor-pointer">
              <input
                // onChange={onFilterChange}

                onChange={handleChange}
                type="checkbox"
                value={category}
              />

              {category[0].toUpperCase() + category.substring(1)}
            </label>

            {/* icona check */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hidden w-3 ml-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Filter;
