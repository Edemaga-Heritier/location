import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import User from './user.js'

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
  public garden!: boolean
  @column()
  public garage!: boolean

  @column()
  public userId!: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
