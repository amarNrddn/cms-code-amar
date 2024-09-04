const { Jobs } = require('../db/models')

const createJob = async (req, res, next) => {
   try {
      const {job} = req.body

      const result = await Jobs.create()
   } catch (error) {
      next(error)
   }
}

module.exports = {
   createJob
}