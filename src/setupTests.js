// src/setupTests.js
import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers";
import "@testing-library/jest-dom";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
