import { model } from "../objection/objection.model";

export class UserModel extends model({
  tableName: 'user'
}) {}
