import express from 'express'
import meControllers from '../app/controllers/MeControllers.js'

const router = express.Router()

router.route('/courses/deleted-courses').get(meControllers.getDeletedCourses)
router.route('/courses').get(meControllers.getCourses)

const MeRouter = router

export default MeRouter
