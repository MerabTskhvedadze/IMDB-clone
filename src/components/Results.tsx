import { Result } from "@/types/backendDataTypes";

export function Results({ results }: { results: Result[] }) {
  return (
    <div>
      {results.map((result) => (
        <h1 key={result.id}>{result.title}</h1>
      ))}
    </div>
  );
}
