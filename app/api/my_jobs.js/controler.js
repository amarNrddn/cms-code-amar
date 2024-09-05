const { createMyJobs, getAllMyJobs, updateById, destroyByOne } = require('../../services/my_jobs')

const create = async (req, res, next) => {
   try {
      const result = await createMyJobs(req)

      res.status(201).json({
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
   }
}

const getAll = async (req, res, next) => {
   try {
      const result = await getAllMyJobs()

      res.status(200).json({
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
   }
}

const update = async (req, res, next) => {
   try {
      const result = await updateById(req)

      res.status(201).json({
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
   }
}

// const destroyservices = async (req, res, next) => {
//    try {
//       const result = await destroyByOne(req)

//       res.status(200).json({
//          message: 'Succes',
//          data: result
//       })
//    } catch (error) {
//       next(error)
//    }
// }

module.exports = {
   create,
   getAll,
   // update,
   // destroyservices
}