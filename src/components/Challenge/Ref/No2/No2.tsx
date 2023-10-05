"use client";

import { useRef } from "react";

export const No2 = () => {
  const isOnRef = useRef(false);
  return (
    <button
      onClick={() => {
        isOnRef.current = !isOnRef.current;
      }}
      className="border text-black"
    >
      {isOnRef.current ? "On" : "Off"}
    </button>
  );
};
