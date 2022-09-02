import React from "react";
import ReactDOM from "react-dom";
import TabController from "./components/TabController";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Tabs</h1>
      <TabController />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
