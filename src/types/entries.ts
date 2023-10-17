export interface EntryViewModel {
  count: number;
  entries: Array<Entries>;
}

export interface Entries {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}
