const mockWindowProperty = (property, value) => {
  const { [property]: originalProperty } = global;
  delete global[property];
  beforeAll(() => {
    Object.defineProperty(global, property, {
      configurable: true,
      writable: true,
      value,
    });
  });
  afterAll(() => {
    global[property] = originalProperty;
  });
};

describe("localStorage test", () => {
  mockWindowProperty("localStorage", {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
  });
  it("localStorage mock works", () => {
    global.localStorage.setItem("abc");
    expect(global.localStorage.setItem).toHaveBeenCalledWith("abc");
  });
});
