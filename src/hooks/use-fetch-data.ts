import { useEffect, useState } from 'react';

type FetchState<T> = {
  data: T | null;
  error: string | null;
};

export const useFetchData = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError('An unknown error occurred');
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, error };
};
