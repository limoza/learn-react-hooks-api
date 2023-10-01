import { fetchData } from "@/fixture/Suspense/data";
import { use } from "@/fixture/Suspense/use";

export const Bio = () => {
  const bio = use(fetchData(`/the-beatles/bio`));
  return (
    <section className="text-black">
      <p className="bio">{bio}</p>
    </section>
  );
};
