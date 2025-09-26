import { useCallback, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const errorMessage = '이미지를 불러오지 못했습니다. 🥲';

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setData(data);
    } catch (e) {
      console.error(e);
      setError({
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, loading, error, fetchData };
}
export default useFetch;
