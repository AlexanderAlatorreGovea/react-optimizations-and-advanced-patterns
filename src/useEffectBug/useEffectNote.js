import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};

const useFetch = (options) => {
  const [data, setData] = useState(null);
  const savedOnSuccess = useCallbackRef(options.onSuccess);

  useEffect(() => {
    fetch(options.url)
      .then((res) => res.json())
      .then((json) => {
        savedOnSuccess.current?.(json);
        setData(json);
      });
  }, [options.url]);

  return { data };
};

export const UseEffectNote = () => {
  const [url, setUrl] = useState("react");
  const { data } = useFetch({
    url: `https://hn.algolia.com/api/v1/search?query=${url}`,
    onSuccess: console.log("success"),
  });

  return (
    <div>
      {data && data.hits.map((hit) => <div key={hit.author}>{hit.author}</div>)}
      <button onClick={() => setUrl("react")}>react</button>
      <button onClick={() => setUrl("redux")}>redux</button>
    </div>
  );
};