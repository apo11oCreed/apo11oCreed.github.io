// Test setup file for Jest
import '@testing-library/jest-dom';

// Mock Qwik modules for Jest testing
jest.mock('@builder.io/qwik', () => ({
  signal: jest.fn((initialValue) => ({
    value: initialValue,
  })),
  component$: jest.fn((fn) => fn),
  useSignal: jest.fn((initialValue) => ({
    value: initialValue,
  })),
  $: jest.fn((fn) => fn),
  useVisibleTask$: jest.fn(),
  Slot: jest.fn(({ children }) => children || null),
  useStylesScoped$: jest.fn(() => {}),
}));

// Mock DOM APIs that might not be available in test environment
beforeEach(() => {
  // Any global setup before each test
});

// Mock browser APIs
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));