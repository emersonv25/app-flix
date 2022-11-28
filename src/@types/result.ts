export interface Result {
    totalResults : number,
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean,
    results: Array<any>
}