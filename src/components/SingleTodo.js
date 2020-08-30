import React from "react";
import ComplexHOC from "./ComplexHOC";

const WrapperComp = (props) => {
  console.log("props", props);
  return (
    <div className="bodyText">
      {props.apiResponse && (
        <p>
          UserID - {props.apiResponse.userId} & Title - {props.apiResponse.title}
        </p>
      )}
    </div>
  );
};

const SingleTodo = (props) => {
  return (
    <ComplexHOC url="https://jsonplaceholder.typicode.com/todos/1">
      <WrapperComp />
    </ComplexHOC>
  );
};

export default SingleTodo;
