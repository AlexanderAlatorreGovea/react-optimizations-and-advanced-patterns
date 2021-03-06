import React, { useState, useEffect } from "react";
import { useShareableState } from "./custom-hook.ts";
import { createStateHook } from "./pub-sub.ts";

const HookComponent = () => {
  const { username, setUsername, count, handleChange } = useShareableState();

  return (
    <div>
      <input name="userName" value={username} onChange={handleChange} />
      <p>{username}</p>
      <p>From HookComponent 1: {count}</p>
    </div>
  );
};

const HookComponent2 = () => {
  const { username, count, increaseCount } = useShareableState();

  return (
    <div>
      <p> From HookComponent 2: You clicked {count} times</p>
      <button onClick={increaseCount}>Click me</button>
      <div>From HookComponent 2: {username}</div>
      <div>From HookComponent 2: {username}</div>
    </div>
  );
};

export default function App() {
  return (
    <>
      <HookComponent />
      <HookComponent2 />
    </>
  );
}

const useCounter = createStateHook(0);

const Counter = () => {
  const [count, setCount] = useCounter();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <div>Count = {count}</div>
    </div>
  );
};

function App2() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
