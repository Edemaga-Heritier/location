import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'houses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('type').notNullable()
      table.string('location').notNullable()
      table.integer('price').notNullable()
      table.integer('surface').notNullable()
      table.integer('bedrooms').notNullable()
      table.integer('bathrooms').notNullable()
      table.string('image').nullable()
      table.boolean('has_garden').defaultTo(false)
      table.boolean('has_garage').defaultTo(false)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}