import React, { useState, useEffect } from "react";
// import ApiContext from "./../contexts/apiContext";

export const ApiContext = React.createContext();
const ComplexHOC = (props) => {
  const [apiResponse, setApiResponse] = useState(null);

  // function for calling external API
  const makeApiCall = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log("data", data);
    setApiResponse(data);
  };

  useEffect(() => {
    makeApiCall(props.url);
  }, [props.url]);

  // create clone and pass it the needed data
  // const ClonedChildren = React.cloneElement(props.children, { apiResponse });

  return <ApiContext.Provider value={apiResponse}>{props.children}</ApiContext.Provider>;
};

export default ComplexHOC;
