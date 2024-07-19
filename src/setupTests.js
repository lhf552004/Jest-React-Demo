import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks(); // Enable fetch mocks

const server = setupServer(...handlers);

// Start server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test to ensure isolation
afterEach(() => {
  server.resetHandlers();
  fetchMock.resetMocks(); // Reset fetch mocks
});

// Close server after all tests
afterAll(() => server.close());
