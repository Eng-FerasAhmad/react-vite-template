import axios, { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import EntriesService, { entryApi } from './EntriesService';
import mockData from './mockData.json';
import { statusCode } from '../constant/statusCode';

describe('EnteriesService', () => {
  let mockAdapter: MockAdapter;

  beforeAll(() => {
    mockAdapter = new MockAdapter(axios);
  });

  afterAll(() => {
    mockAdapter.restore();
  });

  test('should fetch the data', () => {
    mockAdapter.onGet(entryApi).reply(statusCode.OK, mockData);
    const { promise } = EntriesService.fetchViewModel();
    promise.then((data) => {
      expect(data).toEqual(mockData);
    });
  });

  test('should handle not found error', () => {
    mockAdapter.onGet(entryApi).reply(statusCode.NOT_FOUND);
    const { promise } = EntriesService.fetchViewModel();
    promise.catch((error: AxiosError) => {
      expect(error.message).toBe('Request failed with status code 404');
    });
  });

  test('should handle internal server error', () => {
    mockAdapter.onGet(entryApi).reply(statusCode.INTERNAL_SERVER_ERROR);
    const { promise } = EntriesService.fetchViewModel();
    promise.catch((error: AxiosError) => {
      expect(error.message).toBe('Request failed with status code 500');
    });
  });

  test('should handle network error', () => {
    mockAdapter.onGet(entryApi).networkError();
    const { promise } = EntriesService.fetchViewModel();
    promise.catch((error: AxiosError) => {
      expect(error.message).toBe('Network Error');
    });
  });
});
