import { useState } from 'react';

const useFetching = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
export default useFetching;
