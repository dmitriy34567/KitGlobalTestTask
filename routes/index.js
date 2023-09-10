const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const profileRouter = require('./profileRouter')
const taskRouter = require('./taskRouter')
const projectRouter = require('./projectRouter')

router.use('/user', userRouter)
router.use('/profile', profileRouter)
router.use('/task', taskRouter)
router.use('/project', projectRouter)

module.exports = router
