import React from "react";

function GeneralStats() {
  return (
    <div className="bg-light h-full rounded-md px-5 pt-5 pb-3 flex justify-between flex-col">
      <h2>Statistiche generali</h2>

      {/* stats e icone */}

      <div className="grid grid-cols-2 gap-2 xl:flex xl:mb-2 xl:justify-between">
        {/* icone */}

        <div className="flex gap-5  ">
          {/* percorsi */}
          <div className="p-4 bg-primaryLighter w-[48px] h-[48px] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-primary -rotate-45 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
          {/* percorsi stats */}
          <div>
            <p className="font-bold text-lg">1</p>
            <p className="text-xs">Percorsi</p>
          </div>
        </div>

        <div className="flex  gap-5">
          {/* Consulenze */}
          <div className="p-4 bg-primaryLighter w-[48px] h-[48px] rounded-full flex justify-center items-center">
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
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </div>

          {/* Consulenze stats */}
          <div>
            <p className="font-bold text-lg">20</p>
            <p className="text-xs">Consulenze</p>
          </div>
        </div>

        <div className="flex  gap-5">
          {/* Ore consulenze */}
          <div className="p-4 bg-primaryLighter w-[48px] h-[48px] rounded-full flex justify-center items-center">
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          {/* Ore consulenze stats */}
          <div>
            <p className="font-bold text-lg">250h</p>
            <p className="text-xs">Ore consulenze</p>
          </div>
        </div>
        <div className="flex  gap-5">
          {/* Classi */}
          <div className="p-4 bg-primaryLighter w-[48px] h-[48px] rounded-full flex justify-center items-center">
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
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
          </div>
          {/* Classi stats */}
          <div>
            <p className="font-bold text-lg">3</p>
            <p className="text-xs">Classi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralStats;
