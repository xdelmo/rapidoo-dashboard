import Navbar from "./components/Navbar";
import User from "./components/User";
import React from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

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
        </main>
        <footer id="footer" className="bg-primary py-7 px-4">
          footer
        </footer>
      </div>
    </div>
  );
}

export default App;
