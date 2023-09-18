import { useState } from "react";
import { ApiItemTrated } from "../types/types.apiRertun";

export function useLocalStorage(key: string, initialValue: ApiItemTrated[]) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });
  
    const setValue = (value: ApiItemTrated) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    };
  
    return [storedValue, setValue];
  }
