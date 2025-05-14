export interface SearchResult {
  id: number;
  title: string;
}

export interface SearchDropdownProps {
  isLoading: boolean;
  searchResult: SearchResult[];
  listItemHandler: (product: SearchResult) => void;
}
