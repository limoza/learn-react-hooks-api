"use client";

import { useState } from "react";

export const No1 = () => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  let timeoutID = null;

  function handleSend() {
    setIsSending(true);
    timeoutID = setTimeout(() => {
      alert("Sent!");
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID);
  }

  return (
    <div className="text-black p-1">
      <input
        disabled={isSending}
        value={text}
        className="border"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="border" disabled={isSending} onClick={handleSend}>
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending && (
        <button className="border" onClick={handleUndo}>
          Undo
        </button>
      )}
    </div>
  );
};
