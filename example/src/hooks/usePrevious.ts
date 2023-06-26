import { useEffect, useRef } from "react";

export function usePrevious<T>(value: any) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current as T;
}
