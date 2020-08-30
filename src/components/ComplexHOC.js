import React, { useState, useEffect } from "react";

const ComplexHOC = (props) => {
  const [apiResponse, setApiResponse] = useState(null);

  // function for calling external API
  const makeApiCall = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("data", data);
    setApiResponse(data);
  };

  useEffect(() => {
    makeApiCall(props.url);
  }, [props.url]);

  // create clone and pass it the needed data
  const ClonedChildren = React.cloneElement(props.children, { apiResponse });

  return <div className="hoc">{ClonedChildren}</div>;
};

export default ComplexHOC;
