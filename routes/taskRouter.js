const Router = require('express')
const router = new Router()
const TaskController = require('../controllers/taskController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', checkRole('USER'), TaskController.create)
router.get('/get',  checkRole('USER'), TaskController.getAll)
router.get('/:id', checkRole('USER'), TaskController.getOne)
router.get('/author/:id', checkRole('USER'), TaskController.getByAuthor)
router.patch('/:id', checkRole('USER'), TaskController.editTask)
router.delete('/:id', checkRole('USER'), TaskController.deleteTask)

module.exports = router