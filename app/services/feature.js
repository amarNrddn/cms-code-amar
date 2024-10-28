const { Feature } = require('../db/models')

const createFeature = async (req, res, next) => {
   try {
      const {
         title,
         description,
         projectId
      } = req.body
      const createFeature = await Feature.create({
         title,
         description,
         projectId
      })

      return createFeature

   } catch (error) {
      console.log(error)
   }
}

const getAllFeature = async () => {
   try {
      const result = await Feature.finAll()

      return result
   } catch (error) {
      console.log(error)
   }
}

module.exports = {
   createFeature,
   getAllFeature
}