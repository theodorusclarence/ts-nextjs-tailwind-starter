import routerMock from 'next-router-mock';
import '@testing-library/jest-dom';

// Allow router mocks.
// eslint-disable-next-line no-undef
jest.mock('next/router', () => routerMock);
