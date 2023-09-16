import { NotFoundException } from "@nestjs/common";
import { MainModel } from "../objection/objection.model";
import { PageDto } from "./base.dto";

export class ModelService<R> {
  modelClass: typeof MainModel

  constructor(modelClass: typeof MainModel) {
    this.modelClass = modelClass
  }

  async findAll(): Promise<PageDto<R>> {
    const data = await this.modelClass.query().castTo<R[]>()
    return new PageDto(data, data.length)
  }

  async create(data): Promise<R> {
    return await this.modelClass.query().insert(data).castTo()
  }

  async findFirst(filters): Promise<R> {
    const result = await this.modelClass.query().where(filters).first().castTo<R>()
    if (result) {
      return result
    } else {
      throw new NotFoundException()
    }
  }
}
