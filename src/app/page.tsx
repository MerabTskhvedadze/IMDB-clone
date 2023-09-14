import { Results } from "@/components";

import { Result } from "@/types/backendDataTypes";

type HomeProps = {
  searchParams: { genre: string };
};

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }
  const { results }: { results: Result[] } = await res.json();

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
