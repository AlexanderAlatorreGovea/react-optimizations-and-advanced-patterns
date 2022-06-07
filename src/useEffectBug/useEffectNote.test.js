/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import {
  toBeInTheDocument,
  toHaveClass,
} from "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import UseEffectNote from "./UseEffectNote";

// beforeAll(() => jest.spyOn(window, "fetch"));
// beforeEach(() =>
//   window.fetch.mockImplementation(() =>
//     mockFetch("https://hn.algolia.com/api/v1/search?query=")
//   )
// );

beforeEach(() => {
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () =>
      Promise.resolve({
        hits: [{ author: "alex" }, { author: "jose" }],
      }),
  });
});

describe("UseEffectNote", () => {
  it("should render a container render", async () => {
    render(<UseEffectNote />);

    await waitFor(() =>
      expect(screen.getByText(/alex/i)).toBeInTheDocument()
    );

    //expect(screen.queryByTitle(/jose/i)).toBeInTheDocument();
  });
});
