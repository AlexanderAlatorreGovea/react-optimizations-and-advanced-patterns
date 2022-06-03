import storeItem from "./localStorage";
//import localStorageMock from "./localStorage.mock";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

describe("selectors", () => {
  it("should return the result of local storage", () => {
    const key = "alex";
    const itemToStore = "govea";

    storeItem(key, itemToStore);

    // const actual = localStorage.getItem(key);

    // expect(actual).toEqual(itemToStore);
    expect(localStorage.getItem).toBeCalledWith(itemToStore)
  });
});
