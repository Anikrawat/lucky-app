import React from "react";

import Navbar from "./Component/Navbar";
import Routing from "./Utility/Routing";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <main>
          <Routing />
        </main>
      </div>
    </>
  );
}

export default App;
