export interface PaginationResponse<T> {
  items: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface InfiniteScrollResponse<T> {
  items: T[];
  meta: {
    nextCursor: string | null;
    hasMore: boolean;
    limit: number;
  };
}
