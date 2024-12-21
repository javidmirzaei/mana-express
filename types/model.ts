export interface ModelType<T> {
  find(): Promise<T[]>;
  findOne(query: any): Promise<T | null>;
  findById(id: string): Promise<T | null>;
  findByIdAndUpdate(id: string, update: Partial<T>): Promise<T | null>;
  findByIdAndDelete(id: string): Promise<T | null>;
}
