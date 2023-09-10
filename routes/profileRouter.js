const Router = require('express')
const router = new Router()
const profileController = require('../controllers/profileController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', checkRole('USER'), profileController.create)//, checkRole('USER')
router.get('/get', checkRole('USER'), profileController.getAll)//, checkRole('ADMIN')
router.get('/:id',  checkRole('USER'),profileController.getOne) //get profile by id checkRole('USER'),
router.patch('/:id',  checkRole('USER'),profileController.editProfile)

module.exports = router
