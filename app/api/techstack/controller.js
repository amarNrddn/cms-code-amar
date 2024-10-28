const { createTechstack } = require('../../services/techstack')

const create = async (req, res, next) => {
   try {
      const result = await createTechstack(req)

      res.status(200).json({
         statusCode: 200,
         message: 'Succes',
         data: result
      })

   } catch (error) {
      next(error)
   }
}

module.exports = {
   create
}