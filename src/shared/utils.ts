import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";

export const capitilize = (str = '') => {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
};

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const isMounted = useRef(false);
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setValue(JSON.parse(item));
      }
    } catch (e) {
      console.log(e);
    }
    return () => {
      isMounted.current = false;
    };
  }, [key]);

  useEffect(() => {
    if (isMounted.current) {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      isMounted.current = true;
    }
  }, [key, value]);

  return [value, setValue];
};

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}