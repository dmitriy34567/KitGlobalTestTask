const Router = require('express')
const router = new Router()
const ProjectController = require('../controllers/projectController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', checkRole('USER'), ProjectController.create)
router.get('/get', checkRole('USER'), ProjectController.getAll)
router.get('/:id', checkRole('USER'), ProjectController.getOne)
router.get('/author/:id', checkRole('USER'), ProjectController.getByAuthor)
router.patch('/:id', checkRole('USER'), ProjectController.editProject)
router.delete('/:id', checkRole('USER'), ProjectController.deleteProject)

module.exports = router