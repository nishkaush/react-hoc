import React, { useState } from "react";
import UsersList from "./components/UsersList";
import SingleTodo from "./components/SingleTodo";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [showUsers, setUsersStatus] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <h1>Hi Worlds</h1>
      {modal && (
        <Modal closeModal={setModal}>
          <button onClick={() => setModal(false)}>Close</button>
          <h1>Hi I m Modal</h1>
        </Modal>
      )}
      <button onClick={() => setModal(!modal)}>
        {modal ? "Hide" : "Show"} Modal
      </button>
      <br />
      <button onClick={() => setUsersStatus(!showUsers)}>Show HOC</button>
      {showUsers && <UsersList />}
    </div>
  );
};

// <SingleTodo />

export default App;
