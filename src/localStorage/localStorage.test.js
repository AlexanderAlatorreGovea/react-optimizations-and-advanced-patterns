import { storeItem } from "./localStorage";
import { localStorageMock } from "./localStorage.mock";

describe("selectors", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    global.localStorage = localStorageMock;
  });

  it("should return the result of", () => {
    const key = "alex";
    const itemToStore = "alex";
    storeItem(key, itemToStore);

    expect(localStorage.getItem("alex")).toEqual(["alex"]);
  });

  it("should return the result of an added item to the array", () => {
    const key = "alex";
    const itemToStore = "govea";

    storeItem(key, itemToStore);

    console.log(localStorage.getItem("alex"));

    expect(localStorage.getItem("alex")).toEqual(["govea"]);
  });
});
