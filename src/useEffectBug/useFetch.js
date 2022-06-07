import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";

const useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};

export const useFetch = (options) => {
  const [data, setData] = useState([]);
  const savedOnSuccess = useCallbackRef(options.onSuccess);

  useEffect(() => {
    let isCancelled = false;

    fetch(options.url)
      .then((res) => res.json())
      .then((json) => {
        if (!isCancelled) {
          setData(json);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [options.url, savedOnSuccess]);

  return { data };
};

