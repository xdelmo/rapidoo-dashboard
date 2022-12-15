import React from "react";
import { format, parseISO } from "date-fns";

function ReservationCard(reservation) {
  // console.log(
  //   "🚀 ~ file: ReservationCard.jsx:5 ~ ReservationCard ~ props",
  //   props
  // );

  // const reservation = {
  //   id: 1,
  //   name: "Dries Vincent",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //   startDatetime: "2022-12-13T14:00",
  //   endDatetime: "2022-12-13T14:30",
  //   typeMeeting: "training",
  //   title: "Formazione aziendale",
  // };
  let startDateTime = parseISO(reservation.startDatetime);
  let endDateTime = parseISO(reservation.endDatetime);

  const [isReserved, setIsReserved] = React.useState(false);

  //   const handleClick = () => {
  //     setIsReserved((prevState) => !prevState);
  //   };

  return (
    <li className="h-full ">
      <div className=" h-full flex border-accent border-solid border-[1px] rounded-md">
        <div className="relative flex items-center w-full px-3 py-4 ">
          <figure className="absolute top-1 left-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </figure>
          {!isReserved && (
            <img
              src={reservation.imageUrl}
              alt=""
              className={`flex-none w-8 h-8 rounded-full border-[1px] border-solid mr-2 ${
                reservation.typeMeeting === "economy" && "border-economy"
              } ${
                reservation.typeMeeting === "entrepreneurship" &&
                "border-entrepreneurship"
              }
                ${reservation.typeMeeting === "training" && "border-training"}
                ${
                  reservation.typeMeeting === "operation" && "border-operation"
                }`}
            />
          )}
          {/* scheda appuntamento */}
          <div className="flex-auto text-accent">
            <div className="flex justify-between">
              {/* pallino più tipo appuntamento */}
              <div className="flex items-center gap-1">
                <div
                  className={`w-2 h-2 rounded-full ${
                    reservation.typeMeeting === "economy" && "bg-economy"
                  } ${
                    reservation.typeMeeting === "entrepreneurship" &&
                    "bg-entrepreneurship"
                  }
                ${reservation.typeMeeting === "training" && "bg-training"}
                ${reservation.typeMeeting === "operation" && "bg-operation"}`}
                ></div>
                {/* mette la prima lettera della parola maiuscola */}
                <span className="text-xs">
                  {reservation.typeMeeting[0].toUpperCase() +
                    reservation.typeMeeting.substring(1)}
                </span>
              </div>
              <div>
                {" "}
                <p className="text-xs font-light ">
                  {/* format da 12 a 24 ore */}
                  <time dateTime={reservation.startDatetime}>
                    {format(startDateTime, "HH:mm")}
                  </time>{" "}
                  -{" "}
                  <time dateTime={reservation.endDatetime}>
                    {format(endDateTime, "HH:mm")}
                  </time>
                </p>
              </div>
            </div>
            {/* mette la prima lettera della parola maiuscola */}
            <p className="my-1 text-sm font-semibold">
              {reservation.title[0].toUpperCase() +
                reservation.title.substring(1)}
            </p>
          </div>
        </div>

        {/* blocco prenotazione */}
        <div>
          <div
            className="flex items-center justify-center h-full p-5 text-white rounded-md bg-accent"
            // cambio stato direttamente con il mouse over
            onMouseEnter={() => setIsReserved(true)}
            onMouseLeave={() => setIsReserved(false)}
          >
            <div>
              {!isReserved ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <button>
                  <p className="text-xs font-bold">Prenota</p>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ReservationCard;
