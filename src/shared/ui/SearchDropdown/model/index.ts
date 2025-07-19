export interface SearchResult {
  id: number;
  title: string;
}

export interface SearchDropdownProps {
  isLoading: boolean;
  searchResult: SearchResult[];
  listItemHandler: (item: SearchResult) => void; // eslint-disable-line no-unused-vars
}
