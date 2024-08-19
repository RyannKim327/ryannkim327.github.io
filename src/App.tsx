import React from "react";
import "./App.css";

import Index from "./components/index";

const App = () => {
  return (
    <div className="bg-[#fbfff4] dark:bg-[#31363f] h-screen w-screen h-screen dark:text-white text-slate-900 transition transition-100 ease-in">
      <Index />
    </div>
  );
};

export default App;
