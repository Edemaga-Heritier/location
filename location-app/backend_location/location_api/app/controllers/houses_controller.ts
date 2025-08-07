import House from '#models/house'
import type { HttpContext } from '@adonisjs/core/http'

export default class HousesController {
  async index({ response }: HttpContext) {
    const houses = await House.all()
    return response.ok(houses)
  }
  async show({ params, response }: HttpContext) {
    const house = await House.find(params.id)
    if (!house) {
      return response.notFound({ message: 'House not found' })
    }
    return response.ok(house)
  }
  async store({ request, response }: HttpContext) {
    const data = request.only([
      'title',
      'description',
      'price',
      'location',
      'surface',
      'bedrooms',
      'bathrooms',
      'image',
      'has_garden',
      'has_garage',
    ])
    const house = await House.create(data)
    return response.created(house)
  }
  async update({ params, request, response }: HttpContext) {
    const house = await House.find(params.id)
    if (!house) {
      return response.notFound({ message: 'House not found' })
    }
    const data = request.only([
      'title',
      'description',
      'price',
      'location',
      'surface',
      'bedrooms',
      'bathrooms',
      'image',
      'has_garden',
      'has_garage',
    ])
    house.merge(data)
    await house.save()
    return response.ok(house)
  }
  async destroy({ params, response }: HttpContext) {
    const house = await House.find(params.id)
    if (!house) {
      return response.notFound({ message: 'House not found' })
    }
    await house.delete()
    return response.ok({ message: 'Maison supprime avec succes' })
  }
}
