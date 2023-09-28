type ContentsProps = {
  tab: string;
  isPending: boolean;
};

type SlowContentsProps = { tab: string; index: number };

export const Contents = ({ tab, isPending }: ContentsProps) => {
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");
  console.log(isPending);

  const items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowContents tab={tab} key={i} index={i} />);
  }
  if (isPending) return <p className="text-black">{tab} loading...</p>;

  return <ul>{items}</ul>;
};

const SlowContents = ({ tab, index }: SlowContentsProps) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="text-black">
      {tab} #{index + 1}
    </li>
  );
};
