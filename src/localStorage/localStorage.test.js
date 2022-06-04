import { storeItem } from "./localStorage";
import { localStorageMock } from "./localStorage.mock";

global.localStorage = localStorageMock;

describe("selectors", () => {
  beforeEach(() => localStorage.clear());

  it("should return the result of", () => {
    const key = "alex";
    const itemToStore = "alex";

    storeItem(itemToStore, key);

    const actual = localStorage.getItem(key);
    const expected = [itemToStore];

    expect(actual).toEqual(expected);
  });

  it("should return the result of an added item to the array", () => {
    const key = "alex";
    const itemToStore = "govea";

    storeItem(itemToStore, key);

    const actual = localStorage.getItem(key);
    const expected = [itemToStore];

    expect(actual).toEqual(expected);
  });

  it("should return the result of an added item", () => {
    const key = "alex";
    const itemToStore = "govea";

    storeItem(itemToStore, key);

    const actual = localStorage.getItem(key);
    const expected = [itemToStore];

    expect(actual).toEqual(expected);
  });
});
