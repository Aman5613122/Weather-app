import React, { useState } from "react";
import Card from "../weather_card/card";
import "./input.css";

const Field = () => {
  const [val, setVal] = useState("");
  const [loc, SetLocc] = useState("India");
  return (
    <>
      <div className="search">
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            if (val !== "") {
              SetLocc(val);
            }
          }}
        >
          Submit
        </button>
      </div>
      <Card naam={loc} />
    </>
  );
};

export default Field;
