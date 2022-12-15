import { Menu, Transition } from "@headlessui/react";

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { Fragment, useState } from "react";
import ReservationCard from "./ReservationCard";
import { it } from "date-fns/locale";
import setDefaultOptions from "date-fns/setDefaultOptions";
import React from "react";
import ColoredCircle from "./ColoredCircle";
import Meeting from "./Meeting";
// Set global locale:
// let setDefaultOptions = require("date-fns/setDefaultOptions");
setDefaultOptions({ locale: it });

// oggetto con date disponibili per la formazione
const availableDaysMeetings = [
  {
    id: 1,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-12-16T14:00",
    endDatetime: "2022-12-16T14:30",
    typeMeeting: "entrepreneurship",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-12-04T14:00",
    endDatetime: "2022-12-04T14:30",
    typeMeeting: "training",
    title: "Formazione aziendale",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-12-24T17:00",
    endDatetime: "2022-12-24T18:30",
    typeMeeting: "economy",
    title: "Contabilità",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FullCalendar({ meetings, newFilters }) {
  // const applyFilters = (newFilters) => {
  //   let filterString = "";
  //   return filterString;

  //   //  else {
  //   //   newFilters.forEach((filter) => {});
  //   // }
  // };
  // console.log("apply newfilters", applyFilters(newFilters));

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    // startOfWeek funzione per lasciare visibili nel calendario anche i giorni
    // dell'ultima settimana nonostante appartengano al mese precedente
    start: startOfWeek(firstDayCurrentMonth),
    // endOfWeek funzione per lasciare visibili nel calendario anche i giorni
    // dell'ultima settimana nonostante appartengano al mese successivo
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
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

  // let availableDays = availableDaysMeetings.filter((day) => {
  //   isSameDay(parseISO(day.date), selectedDay);
  // });

  // console.log("🚀 ~ file: FullCalendar.jsx:97 ~ availableDays", availableDays);
  // console.log("selectedf Day", selectedDay);
  // const [meetingType, setMeetingType] = React.useState("");

  // const [array, setArray] = React.useState([]);
  let filteredColoredCircle = [];
  return (
    <div className="">
      <div className="w-full">
        <div className="flex flex-col justify-between gap-10 xl:flex-row">
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
              <h2 className="font-semibold text-gray-900 ">
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
              {days.map((day, dayIdx) => {
                filteredColoredCircle = [];
                return (
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
                        isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "bg-red-500",
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          " bg-accent border-accent border-[1px] border-solid text-white",
                        !isEqual(day, selectedDay) &&
                          "hover:bg-accentDesaturated",
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          "font-semibold",
                        "mx-auto flex h-8 w-8 items-center justify-center relative rounded-full"
                      )}
                    >
                      {/* //! cerchio per avere colpo d'occhio i giorni in cui è possibile prenotarsi 
                    per un appuntamento */}
                      <div className="absolute">
                        {/* filtro sulle categorie scelte dall'utente aggiunto anche ai cerchi
                      intorno ai giorni in cui è possibile registrarsi per un appuntamento */}
                        {availableDaysMeetings
                          .filter((availableDaysMeeting) => {
                            if (newFilters.length < 1) {
                              {
                                /* se il newFilters è vuoto allora non filtra nulla */
                              }
                              return availableDaysMeeting.typeMeeting !== "";
                            } else {
                              {
                                /* altrimenti per ogni tipo in newFilters */
                              }
                              for (let tipo in newFilters) {
                                {
                                  /* se il typeMeeting di ogni meeting è incluso nell'array dei filtri
                            allora ritorna true e lo considera nel mapping successivo */
                                }
                                if (
                                  newFilters[tipo].includes(
                                    availableDaysMeeting.typeMeeting
                                  )
                                )
                                  return true;
                              }
                            }
                          })
                          .some((availableDaysMeeting) =>
                            isSameDay(
                              parseISO(availableDaysMeeting.startDatetime),
                              day
                            )
                          ) && (
                          <div className=" h-8 w-8 mx-auto rounded-full border-accent border-[1px] border-solid "></div>
                        )}
                      </div>
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>
                    {/* pallino per vedere se c'è un meeting già prenotato */}
                    <div className=" h-2 mx-auto mt-1 gap-[1px] flex items-center justify-center">
                      {/* {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-2 h-2  rounded-full bg-sky-500 border-[1px] border-solid border-white"></div>
                    )} */}
                      {/* //! IL PALLINO deve essere uno solo per ogni tipo di appuntamento,
                        //! se ci sono 2 economy allora deve essere visibile un solo pallino celeste  */}

                      {meetings.map((meeting) => {
                        if (isSameDay(parseISO(meeting.startDatetime), day)) {
                          {
                            /* se il il tipo di meeting non è presente in array, allora 
                          non lo inserisce e passa al prossimo meeting del giorno */
                          }
                          if (
                            !filteredColoredCircle.includes(meeting.typeMeeting)
                          ) {
                            filteredColoredCircle.push(meeting.typeMeeting);
                          }
                        }
                      })}
                      {filteredColoredCircle.length > 0 && (
                        <div className="z-10 flex items-center justify-center gap-1 -mt-4 -space-x-2">
                          {filteredColoredCircle
                            .filter((color) => {
                              if (newFilters.length < 1) {
                                {
                                  /* se il newFilters è vuoto allora non filtra nulla */
                                }
                                return true;
                              } else {
                                {
                                  /* per tutti i tipi di filtri inseriti dall'utente */
                                }
                                for (let tipo in newFilters) {
                                  {
                                    /* se il tipo di filtro include il colore allora torna true */
                                  }
                                  if (newFilters[tipo].includes(color))
                                    return true;
                                }
                              }
                            })
                            .map((color) => {
                              return (
                                <div className=" p-[2px] bg-white z-10 rounded-full">
                                  {/* mappa tutti i colori rimasti e renderizza i pallini colorati sotto le date */}
                                  <ColoredCircle typeMeeting={color} />
                                </div>
                              );
                            })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* recap appuntamenti */}
          <section className="flex-1 ">
            <div className="flex flex-col items-center justify-center">
              <h2 className="self-start py-5 font-semibold text-gray-900 xl:p-5">
                <time dateTime={format(today, "dd-MM-yyyy")}>
                  {format(today, "dd MMMM yyyy")}
                </time>
                {/* <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                  {format(selectedDay, "MMM dd, yyy")}
                </time> */}
              </h2>
              <ol className="w-full mt-4 space-y-2 text-sm leading-6 text-gray-500">
                {selectedDayMeetings.length > 0 ? (
                  selectedDayMeetings
                    .filter((meeting) => {
                      if (newFilters.length < 1) {
                        {
                          /* se il newFilters è vuoto allora non filtra nulla */
                        }
                        return meeting.typeMeeting !== "";
                      } else {
                        {
                          /* altrimenti per ogni tipo in newFilters */
                        }
                        for (let tipo in newFilters) {
                          {
                            /* se il typeMeeting di ogni meeting è incluso nell'array dei filtri
                            allora ritorna true e lo considera nel mapping successivo */
                          }
                          if (newFilters[tipo].includes(meeting.typeMeeting))
                            return true;
                        }
                      }
                    })
                    .map((meeting) => {
                      return <Meeting meeting={meeting} key={meeting.id} />;
                    })
                ) : (
                  <p className="xl:pl-5">Nessun impegno oggi</p>
                )}
                {/* Card per prenotazione solo nei giorni cerchiati e filtrati per typeMeeting */}
                {availableDaysMeetings
                  .filter((day) => {
                    if (newFilters.length < 1) {
                      {
                        /* se il newFilters è vuoto allora non filtra nulla */
                      }
                      return day.typeMeeting !== "";
                    } else {
                      {
                        /* altrimenti per ogni tipo in newFilters */
                      }
                      for (let tipo in newFilters) {
                        {
                          /* se il typeMeeting di ogni day è incluso nell'array dei filtri
                            allora ritorna true e lo considera nel mapping successivo */
                        }
                        if (newFilters[tipo].includes(day.typeMeeting))
                          return true;
                      }
                    }
                  })
                  .map((day) => {
                    if (isSameDay(parseISO(day.startDatetime), selectedDay)) {
                      return <ReservationCard />;
                    }
                  })}
              </ol>
              <ol></ol>

              {/* {
                  availableDaysMeetings.map((availableDay) => {
                    if (isSameDay(parseISO(availableDay.date), meeting))
                      return <ReservationCard />;
                  });
                } */}
            </div>
          </section>
        </div>
      </div>
    </div>
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
