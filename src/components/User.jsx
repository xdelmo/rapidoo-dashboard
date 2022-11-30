import React from "react";

function User() {
  return (
    <div>
      <div className="bg-white  px-5 py-3 rounded-md">
        {/* informazioni */}
        <div className="flex justify-end items-center gap-9">
          {/* notifiche */}
          <div className="flex gap-3">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
              {/* numero notifiche */}
              <p className="absolute font-secondary left-[50%] bottom-[50%] bg-primary text-light rounded-full font-semibold p-2 w-[9px] h-[18px] flex justify-center items-center">
                <span>4</span>
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </div>

          <div>
            {/* info cliente */}
            <div className="flex justify-center items-center gap-4">
              {/* anagrafica utente */}
              <div className="flex justify-end flex-col w-[100px] text-right">
                <p className="text-[14px]">Giorgio Corelli </p>
                {/* <p className="text-[14px]"> Corelli</p> */}

                {/* luogo */}
                <p className="text-right text-accentParagraph text-[12px] -mt-1">
                  Officina
                </p>
              </div>

              {/* avatar utente */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" h-[38px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              {/* <p className="absolute font-secondary left-[50%] bottom-[50%] bg-primary rounded-full font-semibold p-2 w-[9px] h-[18px] flex justify-center items-center">
               
                </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
