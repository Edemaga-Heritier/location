import House from '#models/house'
import type { HttpContext } from '@adonisjs/core/http'

export default class CreateHousesController {
  // ajouter une maison
  async store({ request, auth }: HttpContext) {
    await auth.use('web').authenticate()
    const data = request.only([
      'title',
      'description',
      'price',
      'location',
      'surface',
      'bedrooms',
      'bathrooms',
      'image',
      'garden',
      'garage',
    ])
    const house = await House.create({
      ...data,
      userId: auth.user!.id, // Assurez-vous que l'utilisateur est authentifié
    })
    return house
  }
  async index() {
    const houses = await House.query().preload('user')
    return houses
  }

  // Mettre à jour une maison
  async update({ params, request, response }: HttpContext) {
    const house = await House.find(params.id)
    if (!house) {
      return response.notFound({ message: 'Maison non trouvée' })
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
      'garden',
      'garage',
    ])
    house.merge(data)
    await house.save()
    return response.ok(house)
  }
  // Supprimer une maison
  async destroy({ params, response }: HttpContext) {
    const house = await House.find(params.id)
    if (!house) {
      return response.notFound({ message: 'Maison non trouvée' })
    }
    await house.delete()
    return response.ok({ message: 'Maison supprimée avec succès' })
  }
}
