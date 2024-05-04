import React from "react";
import Navbar from "./Components/Navbar";
import Manager from "./Components/Manager";

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 z-[-10] min-w-screen min-h-screen bg-zinc-900 bg-[linear-gradient(to_right,#ff00ff1a_1px,transparent_1px),linear-gradient(to_bottom,#ff00ff1a_1px,transparent_1px)] bg-[size:14px_24px] overflow-hidden">
        {/* backround is taken from - https://sinqi.tools/backgrounds . ( Darker version not properly working, so took lighter one and changed colors) */}
        {/* Blurry Purple div */}
        <div className="absolute inset-x-0 top-0 z-[-10] m-auto w-[310px] h-[310px] rounded-full bg-purple-600 opacity-70 lg:blur-[150px] blur-[100px]"></div>
      </div>

      <div className="p-[1px] z-10">
        <Navbar />
        <Manager />
      </div>
    </div>
  );
}

export default App;
