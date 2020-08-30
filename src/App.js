import React, { useState } from "react";
import UsersList from "./components/UsersList";
import SingleTodo from "./components/SingleTodo";
import "./App.css";

const App = () => {
  const [showUsers, setUsersStatus] = useState(false);
  return (
    <div className="App">
      <h1>Hi Worlds</h1>
      <SingleTodo />
      <button onClick={() => setUsersStatus(!showUsers)}>Show HOC</button>
      {showUsers && <UsersList />}
    </div>
  );
};

export default App;
