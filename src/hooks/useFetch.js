import { useCallback, useEffect, useState } from "react";

function useFetch({ query, options }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await query({options});
      setData(data);
    } catch (e) {
      console.error(e);
      setError({
        message: e.message,
      });
    } finally {
      setIsLoading(false);
    }
  }, [query, options]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, isLoading, error, refetch };
}
export default useFetch;
