import React, { useContext } from "react";
import ComplexHOC from "./ComplexHOC";
// import ApiContext from "./../contexts/apiContext";
import { ApiContext } from "./ComplexHOC";

const WrapperComp = () => {
  const data = useContext(ApiContext);
  // console.log("context data", data);
  return (
    <div className="bodyText">
      {data && (
        <p>
          UserID - {data.userId} & Title - {data.title}
        </p>
      )}
    </div>
  );
};

const SingleTodo = () => {
  return (
    <ComplexHOC url="https://jsonplaceholder.typicode.com/todos/1">
      <WrapperComp />
    </ComplexHOC>
  );
};

export default SingleTodo;
