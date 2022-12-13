import React from "react";
import { format, parseISO } from "date-fns";

function Meeting({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  // funzione per ottenere la percentuale del percorso
  // perchè Tailwind non permette l'uso di classi dinamiche all'interno degli stili
  const getPathLenght = (meeting) => {
    const pathLenght = `w-[${meeting.path}%]`;
    console.log(pathLenght);
    return pathLenght;
  };

  return (
    <li className="flex items-center w-full px-3 py-4 rounded-md bg-accentDesaturated ">
      <img
        src={meeting.imageUrl}
        alt=""
        className={`flex-none w-8 h-8 rounded-full border-[1px] border-solid mr-2 ${
          meeting.typeMeeting === "economy" && "border-economy"
        } ${
          meeting.typeMeeting === "entrepreneurship" &&
          "border-entrepreneurship"
        }
          ${meeting.typeMeeting === "training" && "border-training"}
          ${meeting.typeMeeting === "operation" && "border-operation"}`}
      />

      {/* scheda appuntamento */}
      <div className="flex-auto text-accent">
        <div className="flex justify-between">
          {/* pallino più tipo appuntamento */}
          <div className="flex items-center gap-1">
            <div
              className={`w-2 h-2 rounded-full ${
                meeting.typeMeeting === "economy" && "bg-economy"
              } ${
                meeting.typeMeeting === "entrepreneurship" &&
                "bg-entrepreneurship"
              }
          ${meeting.typeMeeting === "training" && "bg-training"}
          ${meeting.typeMeeting === "operation" && "bg-operation"}`}
            ></div>
            {/* mette la prima lettera della parola maiuscola */}
            <span className="text-xs">
              {meeting.typeMeeting[0].toUpperCase() +
                meeting.typeMeeting.substring(1)}
            </span>
          </div>
          <div>
            {" "}
            <p className="text-xs font-light ">
              {/* format da 12 a 24 ore */}
              <time dateTime={meeting.startDatetime}>
                {format(startDateTime, "HH:mm")}
              </time>{" "}
              -{" "}
              <time dateTime={meeting.endDatetime}>
                {format(endDateTime, "HH:mm")}
              </time>
            </p>
          </div>
        </div>
        {/* mette la prima lettera della parola maiuscola */}
        <p className="my-1 text-sm font-semibold">
          {meeting.title[0].toUpperCase() + meeting.title.substring(1)}
        </p>
        {meeting.path && (
          <div className="flex items-center gap-2">
            {" "}
            <span className="block text-xs">Percorso</span>
            <div className="flex-1 w-full h-2 rounded-md bg-accentLight">
              {/* funzione per ottenere la percentuale del percorso
                perchè Tailwind non permette l'uso di classi dinamiche all'interno degli
                stili */}
              <div
                // className={`w-[${meeting.path}%] h-2 bg-accent rounded-md`}
                // className={`${getPathLenght(meeting)} h-2 bg-accent rounded-md`}
                //  ! NON è LA MIGLIORE IMPLEMENTAZIONE PERCHè DAL BACKEND NON MI ARRIVERà
                //  ! MAI COME DATO RAW "w-[n%]"
                className={`${meeting.path} h-2 bg-accent rounded-md`}
              ></div>
            </div>
          </div>
        )}
        {/* <p className="text-gray-900">{meeting.name}</p> */}
        {/* <p className="mt-0.5">
            <time dateTime={meeting.startDatetime}>
              {format(startDateTime, "h:mm a")}
            </time>{" "}
            -{" "}
            <time dateTime={meeting.endDatetime}>
              {format(endDateTime, "h:mm a")}
            </time>
          </p> */}
      </div>

      {/* menu option */}
      {/* <Menu
          as="div"
          className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
        >
          <div>
            <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
              <span className="sr-only">Open options</span>
  
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-accent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </Menu.Button>
          </div>
  
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Cancel
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu> */}
    </li>
  );
}

export default Meeting;
