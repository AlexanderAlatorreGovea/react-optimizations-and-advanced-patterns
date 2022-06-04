const mockWindowProperty = (property, value) => {
  const { [property]: originalProperty } = window;
  delete window[property];
  beforeAll(() => {
    Object.defineProperty(window, property, {
      configurable: true,
      writable: true,
      value,
    });
  });
  afterAll(() => {
    window[property] = originalProperty;
  });
};

describe("localStorage test", () => {
  mockWindowProperty("localStorage", {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
  });
  it("localStorage mock works", () => {
    window.localStorage.setItem("abc");
    expect(window.localStorage.setItem).toHaveBeenCalledWith("abc");
  });
});
