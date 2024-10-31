const { createProject, getAllProject, getOneProject } = require('../../services/projects')

const create = async (req, res, next) => {
   try {
      const result = await createProject(req)

      res.status(200).json({
         statusCode: 201,
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
      res.status(500).json({ message: "Error creating project", error })
   }
}

const getAll = async (req, res, next) => {
   try {
      const result = await getAllProject()

      res.status(200).json({
         statusCode: 200,
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
   }
}

const getOne = async (req, res, next) => {
   try {
      const result = await getOneProject(req)

      res.status(200).json({
         statusCode: 200,
         message: 'Succes',
         data: result
      })
   } catch (error) {
      console.log(error)
   }
}

module.exports = {
   create,
   getAll,
   getOne
}