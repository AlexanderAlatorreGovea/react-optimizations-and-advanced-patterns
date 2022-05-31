import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import WithSpinner from "../composition/WithSpinner";

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
    let isCancelled = false;

    fetch(options.url)
      .then((res) => res.json())
      .then((json) => {
        if (!isCancelled) {
          savedOnSuccess.current?.(json);
          setData(json);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [options.url]);

  return { data };
};

const UseEffectNote = () => {
  const [url, setUrl] = useState("react");
  const { data } = useFetch({
    url: `https://hn.algolia.com/api/v1/search?query=${url}`,
    onSuccess: console.log("success"),
  });

  const hits = data && data.hits;

  const Hits = () => (
    <div>
      {hits.map((hit) => (
        <div key={hit.author}>{hit.author}</div>
      ))}
      <button onClick={() => setUrl("react")}>react</button>
      <button onClick={() => setUrl("redux")}>redux</button>
    </div>
  );

  const ComposedHits = WithSpinner(Hits);

  return <ComposedHits isLoading={!hits} />;
};

export default UseEffectNote;
