export default interface Book {
    id?: number,
    title: string,
    rating?: number,
    year?: number,
    genre?: string,
    pages?: number,
    thumb?: string,
    hasBeenRead: number,
    authorId: number
}
