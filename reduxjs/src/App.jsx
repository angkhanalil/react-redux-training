import React from "react";

const Hello = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const World = () => {
  return (
    <div>
      <h1>World</h1>
      <hr />
      <Hello />
    </div>
  );
};

const App = () => {
  return (
    <div>
      App
      <World />
    </div>
  );
};

export default App;
