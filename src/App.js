import Navbar from "./components/Navbar";
import User from "./components/User";
import React, { useEffect } from "react";
import Badge from "./components/Badge";
import GeneralStats from "./components/GeneralStats";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // hook per avere come default la sidebar aperta se la larghezza dello schermo è maggiore di 768px
  // cioè se è un desktop e non più un tablet
  React.useEffect(() => {
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
    <div className="App flex min-h-screen w-[100vw] font-main">
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
          <div className="flex py-7 gap-7 flex-wrap">
            <Badge />
            {/* <GeneralStats /> */}
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
