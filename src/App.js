import PlayersList from "./Component/PlayersList";
import NavScrollExample from "../src/Component/Navbar";
import React from "react";
import Footer from "./Component/Footer";

// linking the components
function App() {
  return (
    <div className=" bg-warning ">
      <NavScrollExample className=" mb-5 " />
      <PlayersList />
      <Footer />
    </div>
  );
}

// exporting as app

export default App;
