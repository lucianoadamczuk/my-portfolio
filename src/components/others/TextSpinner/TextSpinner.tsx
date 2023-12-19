import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./TextSpinner.css";
export default function TextSpinner(): React.ReactNode {
  const string = "Create - Transform - Inspire";

  return (
    <div className=" w-full h-40  relative TextSpinner">
      {string.split("").map((item, index) => (
        <p
          className=" absolute  text-sm"
          key={uuidv4()}
          style={{
            left: "50%",
            rotate: `${11 * index}deg`,
            transformOrigin: "0 80px",
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
