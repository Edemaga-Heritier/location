import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async redirectToGoogle({ ally }: HttpContext) {
    return ally.use('google').redirect()
  }
  async handleGoogleCallback({ ally, auth, response }: HttpContext) {
    const google = ally.use('google')
    if (google.accessDenied()) return 'Accès refusé'
    if (google.stateMisMatch()) return 'État de la session invalide'
    if (google.hasError()) return google.getError()
        const userData= await google.user()
    const user =await User.firstOrCreate(
        { email: userData.email },
      {
        fullName: userData.name,
        avatarUrl: userData.avatarUrl,
        provider: 'google',
      }
    )
      await auth.use('web').login(user)
    return response.redirect('http://localhost:5173')
    {
    
  }

