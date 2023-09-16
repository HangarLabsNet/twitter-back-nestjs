import { Model, QueryContext } from 'objection';
import * as uuid from 'uuid'

// crear una subclase por conexión a base de datos
export class MainModel extends Model {}

export function model(opts: {
  tableName: string,
  idField?: string,
  creationDtField?: string,
  autoCreationDt?: boolean,
 }) {
  const fo = Object.assign({
    idField: 'id',
    creationDtField: 'creation_dt',
    autoCreationDt: true
  }, opts)

  return class extends MainModel {
    static get tableName() {
      return fo.tableName
    }

    async $beforeInsert(queryContext: QueryContext): Promise<any> {
      await super.$beforeInsert(queryContext)
      this[fo.idField] = genId(12)  // El 12 y el formato lo pongo por puro gusto personal
      if (fo.autoCreationDt) {
        this[fo.creationDtField] = new Date()
      }
    }
  }
}

function genId (limit: number) {
  const result = uuid.v4().replaceAll('-', '')
  return limit ? result.substring(0, limit) : result
}
