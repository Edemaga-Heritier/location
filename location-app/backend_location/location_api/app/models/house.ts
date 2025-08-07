import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class House extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public title!: string

  @column()
  public description!: string

  @column()
  public price!: number

  @column()
  public location!: string

  @column()
  public surface!: number
  @column()
  public bedrooms!: number
  @column()
  public bathrooms!: number
  @column()
  public image!: string
  @column()
  public has_garden!: boolean
  @column()
  public has_garage!: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
