const { createFeature } = require('../../services/feature')

const create = async (req, res, next) => {
   try {
      const result = await createFeature(req)

      res.status(201).json({
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