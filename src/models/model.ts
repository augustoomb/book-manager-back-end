export interface SimpleModel<T> {
    // create(obj: T): Promise<void>;
    create(obj: T): Promise<Partial<T>>;
    list(userId: number): Promise<Partial<T>[]>;
    find(id: number): Promise<Partial<T> | null>;
}

export interface Model<T> extends SimpleModel<T> {
    update(id: number, obj: T): Promise<void>;
    delete(id: number): Promise<void>;
}

export interface ComplexModelAuthor<T> extends SimpleModel<T> {
    findByName(name: string): Promise<Partial<T> | null>;
}

export interface ComplexModelBook<T> extends Model<T> {
    findByTitle(title: string): Promise<Partial<T> | null>;
}
