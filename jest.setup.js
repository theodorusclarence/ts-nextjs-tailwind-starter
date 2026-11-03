import '@testing-library/jest-dom';

// Allow router mocks.
jest.mock('next/router', () => jest.requireActual('next-router-mock'));
