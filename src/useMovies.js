import { useState,useEffect } from "react";

const key = "1c38ab55";

export function useMovies(query){

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState("");

    useEffect(
      function () {

        // callback?.()

        const controller = new AbortController();
        async function fetchMovies() {
          try {
            setIsloading(true);
            setError("");
            const res = await fetch(
              `https://www.omdbapi.com/?apikey=${key}&s=${query}`,
              { signal: controller.signal }
            );

            if (!res.ok) {
              throw new Error("something went wrong with fetching movies");
            }

            const data = await res.json();

            if (data.Response === "False") throw new Error("Movie not found");

            setMovies(data.Search);
          } catch (err) {
            // setError(err.message);
            if (err.name !== "AbortError") {
              console.log(err.message);
              setError(err.message);
            }
          } finally {
            setIsloading(false);
          }
        }
        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }

        
        fetchMovies();

        return function () {
          controller.abort();
        };
      },
      [query]
    );
    return {movies,isLoading,error}
}