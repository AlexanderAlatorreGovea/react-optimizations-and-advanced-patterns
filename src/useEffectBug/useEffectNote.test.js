import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectNote from "./UseEffectNote";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        hits: {
          author: "alex",
        },
      }),
  })
);

describe("UseEffectNote", () => {
  it("should render a container render", () => {
    render(<UseEffectNote />);

    const name = screen.queryByTitle("alex");
    console.log(name);
    expect(name).toBeInTheDocument();
  });
});
