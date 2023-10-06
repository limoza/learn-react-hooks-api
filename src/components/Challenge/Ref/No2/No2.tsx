"use client";

import { useState } from "react";

export const No2 = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <button
      onClick={() => {
        setIsOn((prev) => !prev);
      }}
      className="border text-black"
    >
      {isOn ? "On" : "Off"}
    </button>
  );
};
