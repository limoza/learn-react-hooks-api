import { fetchData } from "@/fixture/Suspense/data";
import { use } from "@/fixture/Suspense/use";

type Albums = {
  id: number;
  title: string;
  year: number;
};

export const Albums = () => {
  const albums = use(fetchData(`/the-beatles/albums`));
  return (
    <ul className="text-black">
      {albums.map((album: Albums) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
};
