import { useState } from "react";

export const useMockRequest = (ms?: number) => {
  const [refreshing, setRefreshing] = useState(false);

  const milliseconds = ms || 1000;

  const onRequest = (callback?: () => void) => {
    setRefreshing(true);
    setTimeout(() => {
      callback?.();
      setRefreshing(false);
    }, milliseconds);
  };

  return {
    onRequest,
    loading: refreshing,
    error: false,
  };
};
