let localStorageItems = {};

export const localStorageMock = {
  getItem: jest.fn().mockImplementation((key) => localStorageItems[key]),
  setItem: jest.fn().mockImplementation((key, value) => {
    localStorageItems[key] = value;
  }),
  clear: jest.fn().mockImplementation(() => {
    localStorageItems = {};
  }),
  removeItem: jest.fn().mockImplementation((key) => {
    localStorageItems[key] = undefined;
  }),
};