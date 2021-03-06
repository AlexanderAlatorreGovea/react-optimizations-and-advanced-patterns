import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";

//import WithSpinner from "../composition/WithSpinner";

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

const UseEffectNote = () => {
  const [url, setUrl] = useState("react");
  const { data } = useFetch({
    url: `https://hn.algolia.com/api/v1/search?query=${url}`,
    //onSuccess: console.log("success"),
  });
  const didMount = React.useRef(false);

  const hits = data && data?.hits;

  // useEffect(() => {
  //   if (didMount.current) {
  //     console.log("I run only if toggle changes.");
  //     return;
  //   }

  //   didMount.current = true;
  // }, [url]);

  //  useEffect(() => {
  //    let isCancelled = false;

  //    if (!isCancelled) {
  //      console.log("hello world");
  //    }

  //    return () => {
  //      isCancelled = true;

  //      console.log("destroy");
  //    };
  //  }, [hits]);

  const clickReduxBtn = () => {
    return setUrl("redux");
  };

  const clickReactBtn = () => {
    return setUrl("react");
  };

  const composeFunction = (...fns) => {
    return fns.map((fn) => fn());
  };

  const Hits = () => (
    <div>
      {hits &&
        hits.map((hit) => (
          <div key={hit.author}>{hit.author}</div>
        ))}
      <button
        onClick={() =>
          composeFunction(clickReactBtn, () =>
            console.log("react")
          )
        }
      >
        react
      </button>
      <button
        onClick={() =>
          composeFunction(clickReduxBtn, () =>
            console.log("redux")
          )
        }
      >
        redux
      </button>
    </div>
  );

  //const ComposedHits = WithSpinner(Hits);

  return <Hits isLoading={!hits} />;
};

export default UseEffectNote;
