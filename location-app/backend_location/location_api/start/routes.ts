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
