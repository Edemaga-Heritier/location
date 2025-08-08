/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const HousesController = () => import('#controllers/houses_controller')
router
  .group(() => {
    router.get('/', [HousesController, 'index'])
    router.get('/:id', [HousesController, 'show'])
    router.post('/', [HousesController, 'store'])
    router.put('/:id', [HousesController, 'update'])
    router.delete('/:id', [HousesController, 'destroy'])
  })
  .prefix('/houses')
//Auth Google
const AuthController = () => import('#controllers/auth_controller')
router.get('/auth/google', [AuthController, 'redirectToGoogle'])
router.get('/auth/google/callback', [AuthController, 'handleGoogleCallback'])

// Create Houses Controller
const CreateHousesController = () => import('#controllers/create_houses_controller')
router
  .group(() => {
    router.post('/houses', [CreateHousesController, 'store'])
    router.get('/houses', [CreateHousesController, 'index'])
    router.put('/houses/:id', [CreateHousesController, 'update'])
    router.delete('/houses/:id', [CreateHousesController, 'destroy'])
  })
  .prefix('/api')
