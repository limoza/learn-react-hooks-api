"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/Transition/Button/Button";
import { Contents } from "../Contents";

export const Transition = () => {
  const [tab, setTab] = useState("about");
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <div className="flex gap-2">
        <Button
          onClick={() =>
            startTransition(() => {
              setTab("about");
            })
          }
        >
          About
        </Button>
        <Button
          onClick={() =>
            startTransition(() => {
              setTab("posts");
            })
          }
        >
          Posts
        </Button>
      </div>
      <div>
        <Contents tab={tab} isPending={isPending} />
      </div>
    </>
  );
};
