import React, { useEffect } from "react";
import { createStateHook } from "./pub-sub.ts";

const results = createStateHook([]);

export const FetchData = () => {
  const [data, setData] = results();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );

        if (!response.ok) {
          throw new Error(response.error);
        }

        const json = await response.json();

        setData(json.results);
      } catch (error) {
        setData(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <SubscribedComponent />
    </div>
  );
};

const SubscribedComponent = () => {
  const [data, _] = results();

  useEffect(() => {
    console.log(window);
  }, [data]);

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};
