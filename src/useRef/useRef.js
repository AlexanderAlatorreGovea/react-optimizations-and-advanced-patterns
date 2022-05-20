import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
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
  }, [options.url, savedOnSuccess]);

  return { data };
};

export const UseRef = () => {
  const [url, setUrl] = useState("react");
  const [color, setColor] = useState({});
  const { data } = useFetch({
    url: `https://hn.algolia.com/api/v1/search?query=${url}`,
    onSuccess: () => {},
  });

  const reassignColor = (textElements, obj) =>
      textElements.forEach((_, idx) => {
      if (idx % 2 === 0) {
        const colorObject = { [idx]: "blue" };
        const newObject = Object.assign(obj, colorObject);

        setColor(newObject);
      }
    });

  const textElements = useMemo(() => [], []);
  React.useEffect(() => {
    const obj = {};
    const hasRefs = textElements.length;

    if (hasRefs) {
      reassignColor(textElements, obj);
    }
  }, [textElements, data]);

  return (
    <div>
      {data &&
        data.hits.map((hit, idx) => (
          <div className="parentRef" key={hit.author}>
            <div
              style={{
                background: `${color[idx]}`,
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
