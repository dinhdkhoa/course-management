import CourseModel from '../models/Course.js'

const siteControllers = {
  async getHomePage(req, res) {
    try {
      const courses = await CourseModel.find({})
      res.render('home', {
        courses: courses.map((course) => course.toJSON())
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  getSearchPage(req, res) {
    res.render('search')
  },
  postSearchPage(req, res) {
    res.render('search')
  }
}

export default siteControllers
