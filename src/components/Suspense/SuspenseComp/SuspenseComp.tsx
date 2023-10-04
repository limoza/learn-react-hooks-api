"use client";

import { Suspense, useState } from "react";
import { Button } from "../Button";
import { Albums } from "../Albums";
import { Loading } from "../Loading";
import { Bio } from "../Bio";

export const SuspenseComp = () => {
  const [isShow, setIsShow] = useState(false);
  const onClick = () => setIsShow(true);
  return (
    <>
      <Button onClick={onClick}>データ表示</Button>
      {isShow && (
        <Suspense fallback={<Loading kind="Albums" />}>
          <Albums />
          <Suspense fallback={<Loading kind="Bio" />}>
            <Bio />
          </Suspense>
        </Suspense>
      )}
    </>
  );
};
