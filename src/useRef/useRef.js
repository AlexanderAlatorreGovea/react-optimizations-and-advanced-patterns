import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createRef,
} from "react";
import { useMemo } from "react";

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

export const UseRef = () => {
  const [url, setUrl] = useState("react");
  const [color, setColor] = useState("");
  const { data } = useFetch({
    url: `https://hn.algolia.com/api/v1/search?query=${url}`,
    onSuccess: console.log("success"),
  });

  const textElements = [];
  const getCurrentIdx = (idx) => {
    const currentIdx = [];
    if (idx) {
      return currentIdx.concat(idx);
    }
  };
  React.useEffect(() => {
    textElements.forEach((el) => el);

    if (textElements.length) {
      textElements.map((el, idx) => {
        if (idx === 0) {
          setColor((prevColor) => (prevColor = "blue"));
        }
      });
    }
  }, [textElements]);

  console.log(color);

  return (
    <div>
      {data &&
        data.hits.map((hit, idx) => (
          <div className="parentRef" key={hit.author}>
            <div
              style={{
                background: `${color ? color : ""}`,
              }}
              ref={(el) => textElements.push(el)}
              className="child"
            >
              {hit.author}
            </div>
          </div>
        ))}
      <button onClick={() => setUrl("react")}>react</button>
      <button onClick={() => setUrl("redux")}>redux</button>
    </div>
  );
};
