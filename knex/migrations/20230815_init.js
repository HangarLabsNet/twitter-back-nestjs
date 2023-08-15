module.exports = {
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  up: function (knex) {
    return knex.schema
      .createTable('user', t => {
        t.string('id').primary()
        t.string('email')
        t.dateTime('creation_dt').index()
      })
      .createTable('post', t => {
        t.string('id').primary()
        t.string('user_id').references('user.id').index()
        t.string('content')
        t.dateTime('creation_dt').index()
      })
  },

  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  down: function (knex) {
    return knex.schema
      .dropTableIfExists('post')
      .dropTableIfExists('user')
  },

  config: {
    transaction: false
  }
}
