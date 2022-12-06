import React from "react";

function Navbar(props) {
  // handleClick per aprire la sidebar
  const handleClick = () => {
    props.setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <nav className="">
      <aside aria-label="Sidebar">
        {/* MOBILE NAVBAR */}
        {/* blocco principale */}
        <div className="py-7 px-4 lg:hidden">
          {/* blocco superiore con logo e bottone */}
          <div
            className={`flex pb-3 flex-wrap gap-4  items-center ${
              props.isSidebarOpen ? "justify-between " : "justify-center"
            }`}
          >
            {/* logo */}
            <img
              src="./assets/logo.png"
              className="h-auto w-[50px]"
              alt="logo rapidoo"
            />
            {/* icon */}
            <button
              onClick={handleClick}
              // bottone invisibile su desktop
              className={` ${props.isSidebarOpen ? "ml-auto" : "mx-auto"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 ">
            <ul className="flex flex-col gap-1 ">
              {/* Dashboard icon */}
              <li className="flex items-center justify-center">
                <a
                  href=""
                  className={`flex flex-row py-2 text-sm gap-2 items-center px-3 text-light rounded-[5px] gradient-primary ${
                    props.isSidebarOpen ? "w-full" : "w-fit"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  {props.isSidebarOpen && <p>Dashboard</p>}
                </a>
              </li>
              {/* Dashboard icon */}

              <li className="flex items-center justify-center">
                <a
                  href=""
                  className={`py-2 flex flex-row text-sm gap-2 items-center px-3 text-accent rounded-[5px] hover:text-light hover:gradient-primary w-full ${
                    props.isSidebarOpen ? "w-full" : "w-fit"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                  {props.isSidebarOpen && <p>Stanze</p>}
                </a>
              </li>

              {/* Libreria icon */}
              <li className="flex items-center justify-center">
                <a
                  href=""
                  className={`py-2 flex flex-row text-sm gap-2 items-center px-3 text-accent rounded-[5px] hover:text-light hover:gradient-primary ${
                    props.isSidebarOpen ? "w-full" : "w-fit"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  {props.isSidebarOpen && <p>Libreria</p>}
                </a>
              </li>

              {/* Classe virtuale icon */}
              <li className="flex items-center justify-center">
                <a
                  href=""
                  className={`py-2 flex flex-row text-sm gap-2 items-center px-3 text-accent rounded-[5px] hover:text-light hover:gradient-primary ${
                    props.isSidebarOpen ? "w-full" : "w-fit"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                  {/* <a href="">Classe virtuale</a> */}
                  {props.isSidebarOpen && <p>Classe virtuale</p>}
                </a>
              </li>

              {/* Le mie attività icon */}
              <li className="flex items-center justify-center">
                <a
                  href=""
                  className={`py-2 flex flex-row text-sm gap-2 items-center px-3 text-accent rounded-[5px] hover:text-light hover:gradient-primary ${
                    props.isSidebarOpen ? "w-full" : "w-fit"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>

                  {/* <a href="">Le mie attività</a> */}
                  {props.isSidebarOpen && <p>Le mie attività</p>}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DESKTOP NAVBAR */}
        <div className="py-7 px-4 hidden lg:block">
          {/* blocco superiore con logo e bottone */}
          <div className="flex pb-3 flex-wrap gap-4  items-center ">
            {/* logo */}
            <img
              src="./assets/logo.png"
              className="h-auto w-[50px]"
              alt="logo rapidoo"
            />
          </div>

          <div className="mt-4 ">
            <ul className="flex flex-col gap-1 ">
              {/* Dashboard icon */}
              <li className="flex items-center justify-center">
                <a
                  href=""
                  className="flex flex-row py-2 text-sm gap-2 items-center px-3 text-light rounded-[5px] gradient-primary w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <p>Dashboard</p>
                </a>
              </li>
              {/* Dashboard icon */}

              <li className="flex items-center justify-center">
                <a
                  href=""
                  className="py-2 flex flex-row text-sm gap-2 items-center px-3 text-accent rounded-[5px] hover:text-light hover:gradient-primary w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                  <p>Stanze</p>
                </a>
              </li>

              {/* Libreria icon */}
              <li className="flex items-center justify-center">
                <a
                  href=""
                  className="py-2 flex flex-row text-sm gap-2 items-center px-3 text-accent rounded-[5px] hover:text-light hover:gradient-primary w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  <p>Libreria</p>
                </a>
              </li>

              {/* Classe virtuale icon */}
              <li className="flex items-center justify-center">
                <a
                  href=""
                  className="py-2 flex flex-row text-sm gap-2 items-center px-3 text-accent rounded-[5px] hover:text-light hover:gradient-primary w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                  {/* <a href="">Classe virtuale</a> */}
                  <p>Classe virtuale</p>
                </a>
              </li>

              {/* Le mie attività icon */}
              <li className="flex items-center justify-center">
                <a
                  href=""
                  className="py-2 flex flex-row text-sm gap-2 items-center px-3 text-accent rounded-[5px] hover:text-light hover:gradient-primary w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>

                  {/* <a href="">Le mie attività</a> */}
                  <p>Le mie attività</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </nav>
  );
}

export default Navbar;
