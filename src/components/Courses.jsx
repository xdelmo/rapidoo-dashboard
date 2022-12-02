import React from "react";
import OverTitle from "./OverTitle";

function Courses() {
  return (
    <div>
      <OverTitle title="Corsi in evidenza" />

      <div className="rounded-md bg-light">
        <img
          src="./assets/corsi.png"
          className="w-full block"
          alt="sample corsi"
        />
        <div className="p-5">
          <div className="flex">
            {/* data  */}
            <div className="flex flex-col justify-center items-center">
              <p>NOV</p>
              <p className="text-[21px]">24</p>
            </div>
            {/* linea verticale */}
            <div className=" border-l mx-5"></div>
            <div>
              <h2 className="font-semibold text-[18px]">Rapidoo Day</h2>

              <p className="text-[14px] text-accentParagraph">
                Lorem ipsum, dolor sit amet
              </p>
            </div>
          </div>

          {/* informazione data conferenza */}
          <div className="my-7 flex flex-col gap-5">
            <div className="flex items-center gap-5">
              {/* icona */}
              <div className="p-1 bg-primaryLighter w-[34px] h-[34px] rounded-[5px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </div>
              {/* data e orario corso */}
              <div>
                <span className="text-sm block font-semibold">
                  Lun, 24 Nov, 2022
                </span>
                <span className="block text-accentParagraph text-xs">
                  18:00 - 19:00
                </span>
              </div>
            </div>

            {/* tipologia conferenza */}
            <div className="flex items-center gap-5">
              {/* icona */}
              <div className="p-1 bg-primaryLighter w-[34px] h-[34px] rounded-[5px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              {/* data e orario corso */}
              <div>
                <span className="text-sm block font-semibold">
                  Videoconferenza
                </span>
                <span className="block text-accentParagraph text-xs">Zoom</span>
              </div>
            </div>
          </div>

          {/* utenti iscritti */}

          <div className=" mb-7">
            <div className="flex -space-x-2">
              <img
                className="w-[38px] h-[38px] rounded-full bg-white "
                src="./assets/avatars/avatar01.svg"
                alt=""
              />
              <img
                className="w-[38px] hidden lg:block h-[38px] rounded-full bg-white  "
                src="./assets/avatars/avatar02.svg"
                alt=""
              />
              <img
                className="w-[38px] h-[38px] hidden lg:block rounded-full bg-white "
                src="./assets/avatars/avatar03.svg"
                alt=""
              />
              {/* utenti senza avatar */}
              <a
                className="flex justify-center font-secondary items-center w-[38px] h-[38px] text-sm font-bold text-accent rounded-full border-2 border-white uppercase bg-accentParagraph"
                href="#"
              >
                pi
              </a>
              <a
                className="flex justify-center font-secondary items-center w-[38px] h-[38px] text-sm font-bold text-accent rounded-full border-2 border-white uppercase bg-accentDesaturated"
                href="#"
              >
                ms
              </a>
              {/* ulteriori utenti iscritti al corso */}
              <div>
                <a
                  className="ml-3 flex justify-center items-center w-[38px] h-[38px] text-xs font-medium text-accent "
                  href="#"
                >
                  +22
                </a>
              </div>
            </div>
          </div>

          {/* posti disponibili */}
          <p className="text-primary text-xs mb-[11px]">
            Solo <span className="font-bold">2</span> posti disponibili
          </p>
          {/* bottone */}
          <button className="rounded-md bg-accent py-2 w-full text-light text-xs px-3 font-semibold">
            <a href="#" className="inline">
              Registrati ora
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
