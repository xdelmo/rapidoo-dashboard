import Navbar from "./components/Navbar";
import User from "./components/User";
import React, { useState, useEffect } from "react";
import Badge from "./components/Badge";
import GeneralStats from "./components/GeneralStats";
import RequestAdvice from "./components/RequestAdvice";
import Calendar from "./components/Calendar";
import Courses from "./components/Courses";
// import OverTitle from "./components/OverTitle";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // hook per avere come default la sidebar aperta se la larghezza dello schermo è maggiore di 768px
  // cioè se è un desktop e non più un tablet
  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      if (window.innerWidth > 768) {
        console.log("desktop");
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="App flex min-h-screen w-screen font-main">
      {/* blocco sinistro con navbar */}
      <div
        id="left-column"
        className={`${isSidebarOpen ? "flex-[1.5]" : "flex-[0.5]"}`}
      >
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      {/* blocco destro con main e card */}
      <div id="right-column">
        <main className="bg-accentDesaturated py-7 px-4">
          <User />
          {/* griglia */}
          <div className="card-grid py-7 grid-flow-dense">
            <Badge />
            <div className="grid-col-span-2">
              <GeneralStats />
            </div>
            <div className="grid-col-span-2 grid-row-span-2">
              <Calendar />
            </div>
            <RequestAdvice />
            <div className=" grid-row-span-2">
              <Courses />
            </div>
          </div>
        </main>
        <footer id="footer" className="bg-primary py-7 px-4">
          {/* footer */}
        </footer>
      </div>
    </div>
  );
}

export default App;
