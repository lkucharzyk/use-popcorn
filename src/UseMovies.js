import { useState, useEffect } from "react";
const apiKey = "bbd35be";

export function UseMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    const controller = new AbortController();
    (async function () {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("fetch error");
        }

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
}
