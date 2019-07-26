import React from "react";
import { Link } from "react-router-dom";

export const ButtonBackToHome = () => {
  return (
    <Link to={`/`}>
      <button className="button">back to home</button>
    </Link>
  );
};
