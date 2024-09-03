const { Myjobs } = require('../db/models')

const createMyJobs = async (req, res, next) => {
   try {
      const { job, city, about } = req.body

      const result = await Myjobs.create({ job, city, about })

      return result
   } catch (error) {
      console.log(error)
   }
}

const getAllMyJobs = async (req, res, next) => {
   try {
      const result = await Myjobs.findAll()

      return result
   } catch (error) {
      next(error)
   }
}

const updateById = async (req, res, next) => {
   try {
      const { id } = req.params
      const { job, city, about } = req.body

      const check = await Myjobs.findOne({ where: { id: id } })

      if (!check) {
         res.status(400).json({ message: `Tidak ada id ${id}` })
      }

      await Myjobs.update(
         { job, city, about },
         {
            where: { id: id },
         }
      )

      const result = await Myjobs.findOne({
         where: { id: id },
         attributes: ['id', 'job', 'city', 'about']
      })

      return result
   } catch (error) {
      next(error)
   }
}

const destroyByOne = async (req, res, next) => {
   try {
      const { id } = req.params

      const check = await Myjobs.findOne({ where: { id: id } })

      if (!check) {
         res.status(400).json({
            message: `Tidak ada id : ${id}`
         })
      }

      await Myjobs.destroy({ where: { id: id } })

      const result = await Myjobs.findOne({
         where: { id: id },
         attributes: ['id', 'job', 'city', 'about']
      })

      return result
   } catch (error) {
      next(error)
   }
}

module.exports = {
   createMyJobs,
   getAllMyJobs,
   updateById,
   destroyByOne
}