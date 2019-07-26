import React from "react";
import { ButtonBackToHome } from "../components/ButtonBackToHome";

const NOT_FOUND_IMAGE =
  "https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif";

export const NotFound = () => {
  return (
    <div className="PageNotFound-wrapper">
      <figure className="image">
        <img src={NOT_FOUND_IMAGE} alt="not found" />
      </figure>
      <p className="subtitle">Page not found!</p>
      <ButtonBackToHome />
    </div>
  );
};
