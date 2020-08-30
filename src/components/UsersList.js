import React from "react";
import RequestHOC from "./RequestHOC";
// import SingleUser from "./singleUser";

const UsersList = (props) => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const MainComp = (props) => {
    return (
      <div>
        <h2>Users list</h2>
        <ul>
          <div>
            {!props.listOfUsers.length &&
              !props.isFetchingUsers &&
              "No users exist"}
          </div>
          <div>
            {!props.listOfUsers.length &&
              props.isFetchingUsers &&
              "Fetching Users.."}
          </div>
          {props.listOfUsers.length &&
            props.listOfUsers.map((user) => (
              <li key={user.email} style={{ margin: "1%" }}>
                {user.name}-{user.email}
              </li>
            ))}
        </ul>
      </div>
    );
  };

  return (
    <RequestHOC url={url} method="GET">
      <MainComp />
    </RequestHOC>
  );
};

export default UsersList;
