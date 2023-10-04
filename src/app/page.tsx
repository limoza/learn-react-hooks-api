// import { Example } from "@/components/Exmaple";
// import { Transition } from "@/components/Transition/Transiton";
import { SuspenseComp } from "@/components/Suspense/SuspenseComp";

export default function Home() {
  return (
    <main className="bg-white h-screen">
      {/* <Transition /> */}
      <SuspenseComp />
    </main>
  );
}
