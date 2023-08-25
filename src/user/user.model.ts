import { model } from "src/objection/objection.model";

export class UserModel extends model({
  tableName: 'user'
}) {}
