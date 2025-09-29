import { useCallback, useEffect, useState } from "react";

function useFetch({ url, options }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.statusText); // 예시
      }

      const data = await response.json();
      setData(data);
    } catch (e) {
      console.error(e);
      setError({
        message: e.message, // 예시
      });
    } finally {
      setIsLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, isLoading, error, refetch };
}
export default useFetch;
