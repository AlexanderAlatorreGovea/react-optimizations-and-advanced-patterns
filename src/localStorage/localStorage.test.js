import { storeItem } from "./localStorage";
//import { localStorageMock } from "./localStorage.mock";
//global.localStorage = localStorageMock;

import { LocalStorageMock } from "./classLocalStorage";

global.localStorage = new LocalStorageMock();

describe("selectors", () => {
  it("should return the result of", () => {
    const key = "alex";
    const itemToStore = "govea";

    storeItem(key, itemToStore);

    // const actual = localStorage.getItem(key);

    // expect(actual).toEqual(itemToStore);
    expect(localStorage.getItem).toBeCalledWith(itemToStore);
  });
});
