const { Abouts, Jobs } = require('../db/models')

const createMyJobs = async (req, res, next) => {
   try {
      const { job, city, about } = req.body

      const result = await Abouts.create({ job, city, about })

      return result
   } catch (error) {
      console.log(error)
   }
}

const getAllMyJobs = async (req, res, next) => {
   try {
      const result = await Abouts.findAll()

      return result
   } catch (error) {
      next(error)
   }
}

const updateById = async (req, res, next) => {
   try {
      const { id } = req.params
      const { job, city, about } = req.body

      const check = await Abouts.findOne({ where: { id: id } })

      if (!check) {
         res.status(400).json({ message: `Tidak ada id ${id}` })
      }

      await Abouts.update(
         { job, city, about },
         {
            where: { id: id },
         }
      )

      const result = await Abouts.findOne({
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

      const check = await Abouts.findOne({ where: { id: id } })

      if (!check) {
         res.status(400).json({
            message: `Tidak ada id : ${id}`
         })
      }

      await Abouts.destroy({ where: { id: id } })

      const result = await Abouts.findOne({
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