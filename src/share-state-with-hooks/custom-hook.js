import { useState } from "react";

export const useShareableState = () => {
  const [username, setUsername] = useState("Abrar");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return {
    username,
    setUsername,
    count,
    setCount,
    handleChange,
    increaseCount
  };
};
