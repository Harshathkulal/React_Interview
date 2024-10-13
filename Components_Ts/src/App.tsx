import React from "react";
import Props from "./Props/Props";
import SearchComponent from "./Custom_Hooks/SearchComponent";

const App: React.FC = () => {
  return <div>
    <Props/>
    <SearchComponent/>
  </div>;
};

export default App;
