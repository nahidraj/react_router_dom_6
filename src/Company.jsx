import React from "react";
import { useParams } from "react-router-dom";
const Company = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>Company</h1>
      <h4>{params.name}</h4>
    </>
  );
};

export default Company;
