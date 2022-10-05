import { Model, UpdateQuery } from 'mongoose';

export class DataRepository<T> {
  private _repository: Model<T>;

  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  findAllByUser(userId: ID) {
    return this._repository
      .find({ user: userId })
      .populate(this._populateOnFind);
  }

  findById(id: ID) {
    return this._repository.findById(id).populate(this._populateOnFind);
  }

  findOne(filter: Partial<T & { id: ID }>) {
    return this._repository.findOne(filter).populate(this._populateOnFind);
  }

  create(item: T) {
    return this._repository.create(item);
  }

  update(id: ID, item: UpdateQuery<T>) {
    return this._repository.findByIdAndUpdate(id, item);
  }

  deleteOneAndDelete(filter: { id: ID, user: ID, status: any }) {
    return this._repository.findOneAndDelete(filter);
  }
}
