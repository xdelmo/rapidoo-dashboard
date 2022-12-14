import React from "react";
import Filter from "./Filter";
import FullCalendar from "./FullCalendar";
import SelectedFilters from "./SelectedFilters";

function Calendar() {
  const meetings = [
    {
      id: 1,
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-05-11T13:00",
      endDatetime: "2022-05-11T14:30",
      typeMeeting: "entrepreneurship",
      title: "Informatica e digitalizzazione",
    },
    {
      id: 2,
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-05-20T09:00",
      endDatetime: "2022-05-20T11:30",
      typeMeeting: "economy",
      title: "Contabilit√†",
      path: "w-[30%]",
    },
    {
      id: 3,
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-05-20T17:00",
      endDatetime: "2022-05-20T18:30",
      typeMeeting: "economy",
      title: "Contabilit√†",
    },
    {
      id: 4,
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-06-09T13:00",
      endDatetime: "2022-06-09T14:30",
      typeMeeting: "entrepreneurship",
      title: "Informatica e digitalizzazione",
    },
    {
      id: 5,
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-12-04T14:00",
      endDatetime: "2022-12-04T14:30",
      typeMeeting: "training",
      title: "Formazione aziendale",
    },
    {
      id: 6,
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-12-13T14:00",
      endDatetime: "2022-12-13T14:30",
      typeMeeting: "economy",
      title: "Contabilit√†",
    },
    {
      id: 7,
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-12-20T09:00",
      endDatetime: "2022-12-20T11:30",
      typeMeeting: "entrepreneurship",
      title: "Informatica e digitalizzazione",
      path: "w-[10%]",
    },
    {
      id: 8,
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-12-13T14:00",
      endDatetime: "2022-12-13T14:30",
      typeMeeting: "economy",
      title: "Contabilit√†",
      path: "w-[30%]",
    },
    {
      id: 9,
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-12-13T14:00",
      endDatetime: "2022-12-13T14:30",
      typeMeeting: "training",
      title: "Contabilit√†",
      path: "w-[70%]",
    },
    {
      id: 10,
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-12-13T14:00",
      endDatetime: "2022-12-13T14:30",
      typeMeeting: "entrepreneurship",
      title: "Informatica e digitalizzazione",
    },
    {
      id: 11,
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-12-20T09:00",
      endDatetime: "2022-12-20T11:30",
      typeMeeting: "training",
      title: "Contabilit√†",
      path: "w-[70%]",
    },
  ];
  const [isFilterShow, SetIsFilterShow] = React.useState(false);
  const handleClick = () => {
    SetIsFilterShow((prevState) => !prevState);
  };

  //! stato ulteriore perch√® non riesco a mappare l'oggetto Set() anche avendolo convertito in array
  // const [newFilters, setNewFilters] = React.useState(
  //   JSON.parse(localStorage.getItem("filters")) || []
  // );
  const [newFilters, setNewFilters] = React.useState([]);

  // stato per mostrare i filtri salvati sopra il calendario
  const [hasFiltersSaved, SetHasFiltersSaved] = React.useState(false);
  const handleFilterSaved = () => {
    SetHasFiltersSaved(true);
  };

  const [state, setState] = React.useState({
    newMeetings: meetings,
    filters: new Set(),
  });

  return (
    <div className="h-full p-5 rounded-md bg-light text-accent">
      {/* blocco superiore */}
      <div className="relative flex items-center justify-between mb-5">
        {/* titolo */}
        <h2 className="mb-2 text-lg font-semibold">Calendario</h2>
        {/* lista categorie scelte dopo aver cliccato sul bottone salva */}
        {hasFiltersSaved && (
          <div className="bg-white ml-auto rounded-md text-xs flex items-center justify-between ">
            <SelectedFilters
              newFilters={newFilters}
              state={state}
              setNewFilters={setNewFilters}
            />
          </div>
        )}
        {/* icona filtraggio */}
        {!isFilterShow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${
              newFilters.length > 0 ? "text-accent" : "text-[#c7c8d3]"
            } h-4  hover:text-accent cursor-pointer ml-1`}
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
        ) : (
          <Filter
            meetings={meetings}
            handleClick={handleClick}
            newFilters={newFilters}
            setNewFilters={setNewFilters}
            hasFiltersSaved={hasFiltersSaved}
            handleFilterSaved={handleFilterSaved}
            state={state}
          />
        )}
      </div>

      {/* blocco principale */}
      <div>
        {/* calendario */}
        <div>
          <FullCalendar
            meetings={meetings}
            newFilters={newFilters}
            setNewFilters={setNewFilters}
          />
        </div>
        {/* appuntamenti */}
      </div>
    </div>
  );
}

export default Calendar;
