import { useState, useEffect } from "react";

export function UseLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() =>
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
