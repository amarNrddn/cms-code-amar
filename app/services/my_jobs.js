const { my_jobs } = require('../db/models')

const createMyJobs = async (req, res, next) => {
   try {
      const { job, city, about } = req.body

      const result = await my_jobs.create({ job, city, about })

      return result
   } catch (error) {
      console.log(error)
   }
}

const getAllMyJobs = async (req, res, next) => {
   try {
      const result = await my_jobs.findAll()

      return result
   } catch (error) {
      next(error)
   }
}

module.exports = {
   createMyJobs,
   getAllMyJobs
}