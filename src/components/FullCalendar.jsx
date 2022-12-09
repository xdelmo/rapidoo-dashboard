import { Menu, Transition } from "@headlessui/react";

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";
import ReservationCard from "./ReservationCard";
import { it } from "date-fns/locale";
import setDefaultOptions from "date-fns/setDefaultOptions";
// Set global locale:
// let setDefaultOptions = require("date-fns/setDefaultOptions");
setDefaultOptions({ locale: it });

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-11T13:00",
    endDatetime: "2022-05-11T14:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T09:00",
    endDatetime: "2022-05-20T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T17:00",
    endDatetime: "2022-05-20T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-06-09T13:00",
    endDatetime: "2022-06-09T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-13T14:00",
    endDatetime: "2022-05-13T14:30",
  },
  {
    id: 6,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-12-13T14:00",
    endDatetime: "2022-12-13T14:30",
    typeMeeting: "economy",
    title: "Contabilità",
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
    title: "Contabilità",
    path: "w-[30%]",
  },
  {
    id: 9,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-12-13T14:00",
    endDatetime: "2022-12-13T14:30",
    typeMeeting: "economy",
    title: "Contabilità",
    path: "w-[70%]",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <div className="">
      <div className="w-full">
        <div className="flex flex-col xl:flex-row justify-between gap-10">
          <div className="flex-1">
            <div className="flex justify-between p-5">
              {/* mese precedente */}
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              {/* mese + anno attuale */}
              <h2 className=" font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              {/* prossimo mese */}
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            {/* calendario */}
            {/* giorni settimana */}
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>Lun</div>
              <div>Mar</div>
              <div>Mer</div>
              <div>Gio</div>
              <div>Ven</div>
              <div>Sab</div>
              <div>Dom</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-accent",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        " bg-accent border-accent border-[1px] border-solid text-white",
                      !isEqual(day, selectedDay) &&
                        "hover:bg-accentDesaturated",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* recap appuntamenti */}
          <section className=" flex-1">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-semibold text-gray-900 xl:p-5 py-5 self-start">
                <time dateTime={format(today, "dd-MM-yyyy")}>
                  {format(today, "dd MMMM yyyy")}
                </time>
                {/* <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                  {format(selectedDay, "MMM dd, yyy")}
                </time> */}
              </h2>
              <ol className="mt-4 space-y-2 text-sm leading-6 w-full text-gray-500">
                {selectedDayMeetings.length > 0 ? (
                  selectedDayMeetings.map((meeting) => (
                    <Meeting meeting={meeting} key={meeting.id} />
                  ))
                ) : (
                  <p className="xl:pl-5">Nessun impegno oggi</p>
                )}
                <ReservationCard />
              </ol>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

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
    <li className="flex items-center px-3 w-full py-4 bg-accentDesaturated rounded-md ">
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
            <p className=" text-xs font-light">
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
        <p className="font-semibold text-sm my-1">
          {meeting.title[0].toUpperCase() + meeting.title.substring(1)}
        </p>
        {meeting.path && (
          <div className="flex items-center gap-2">
            {" "}
            <span className="text-xs block">Percorso</span>
            <div className=" bg-accentLight flex-1 h-2 rounded-md w-full">
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

// calendario con inizio del mese responsivo partendo dal lunedì e non dalla domenica
let colStartClasses = [
  "col-start-7",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
];
