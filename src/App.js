import Navbar from "./components/Navbar";
import User from "./components/User";
import React, { useState, useEffect } from "react";
import Badge from "./components/Badge";
import GeneralStats from "./components/GeneralStats";
import RequestAdvice from "./components/RequestAdvice";
import Calendar from "./components/Calendar";
import Courses from "./components/Courses";
import Contents from "./components/Contents";
import Performance from "./components/Performance";
import Footer from "./components/Footer";
// import OverTitle from "./components/OverTitle";
import Modal from "./components/Modal";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // hook per avere come default la sidebar aperta se la larghezza dello schermo è maggiore di 768px
  // cioè se è un desktop e non più un tablet
  // useEffect(() => {
  //   function handleResize() {
  //     console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
  //     if (window.innerWidth > 768) {
  //       console.log("desktop");
  //       setIsSidebarOpen(true);
  //     } else {
  //       setIsSidebarOpen(false);
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);
  // });
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="flex w-screen min-h-screen App font-main">
      {/* blocco sinistro con navbar */}
      <Modal showModal={showModal} setShowModal={setShowModal} />
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
        <main className="px-4 bg-accentDesaturated py-7">
          <User />
          {/* griglia */}
          {/* DESKTOP GRID */}
          <div className="hidden xl:card-grid grid-flow-dense py-7">
            <Badge />
            <div className="grid-col-span-2">
              <GeneralStats />
            </div>
            <div className="grid-col-span-2 grid-row-span-2">
              <Calendar showModal={showModal} setShowModal={setShowModal} />
            </div>
            <RequestAdvice />
            <div className=" grid-row-span-2">
              <Courses />
            </div>
            <div className="grid-col-span-2 grid-row-span-2">
              <Performance />
            </div>
            <Contents />
          </div>

          {/* griglia */}
          {/* MOBILE GRID */}
          <div className="card-grid py-7 xl:hidden ">
            <Badge />
            <div className="grid-col-span-2">
              <GeneralStats />
            </div>
            {/* le 2 prime colonne sinistre*/}
            <div className="grid-col-span-2">
              <div className="grid-col-span-2 grid-row-span-2">
                <Calendar />
              </div>
              <div className="mt-6 grid-col-span-2">
                <Performance />
              </div>
            </div>
            {/* solo colonna destra */}
            <div className="mb-6 grid-col-span-1">
              {" "}
              <RequestAdvice />{" "}
              <div className="mt-6 grid-row-span-2">
                <Courses />
                <div className="mt-6">
                  <Contents />
                </div>
              </div>{" "}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
