import React, { useState, useEffect } from "react";

const RequestHOC = (props) => {
  // url, GET/POST, payload, childres
  const { url, method, body, children } = props;
  const [isFetchingUsers, setIsFetchingUsers] = useState(false);
  const [listOfUsers, setUsers] = useState([]);
  // let listOfUsers = [];
  // let isFetchingUsers = false;

  const makeApiCall = async () => {
    setIsFetchingUsers(true);
    let data;
    if (method === "POST") {
      data = {
        url,
        method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
    } else {
      data = url;
    }

    try {
      const resp = await fetch(data);
      const result = await resp.json();
      setUsers(result);
      setIsFetchingUsers(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    makeApiCall();
  });

  // const clonedChildren = React.Children.map(children, child=>{
  //   React.cloneElement(child,)
  // })
  return (
    <div>{React.cloneElement(children, { listOfUsers, isFetchingUsers })}</div>
  );
};

export default RequestHOC;
