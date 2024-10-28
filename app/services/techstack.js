const { Techstack } = require('../db/models')

const createTechstack = async (req, res, next) => {
   try {
      const {
         techstack,
         projectId
      } = req.body

      const createTechstack = await Techstack.create({
         techstack,
         projectId
      })

      return createTechstack
   } catch (error) {
      console.log(error)
   }
}

module.exports = {
   createTechstack
}