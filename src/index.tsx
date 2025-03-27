import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  return <h1>Hello, Webpack!</h1>;
};

root.render(<App />);
