import axios, { AxiosError } from 'axios';
import { EntryViewModel } from '../types/entries';

export const entryApi = 'https://api.publicapis.org/entries?category=science';

export default class EntriesService {
  public static fetchViewModel(): { promise: Promise<EntryViewModel> } {
    const promise: Promise<EntryViewModel> = new Promise((resolve, reject) => {
      axios
        .get(entryApi)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });

    return { promise };
  }
}
