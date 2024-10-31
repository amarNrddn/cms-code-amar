const { Project, Techstack, Feature } = require('../db/models')

const createProject = async (req, res, next) => {
   try {
      const {
         title,
         description,
         linksourcode,
         introduction,
         clone,
         install,
         run,
         slug
      } = req.body

      const thumbnail = req.file ? `/upload/thumbnails/${req.file.filename}` : null;

      const createProject = await Project.create({
         title,
         description,
         linksourcode,
         thumbnail,
         introduction,
         clone,
         install,
         run,
         slug
      })

      return createProject
   } catch (error) {
      console.log(error)
   }
}

const getAllProject = async (req, res, next) => {
   try {
      const result = await Project.findAll({
         attributes: ['id', 'title', 'description', 'linksourcode', 'thumbnail', 'introduction', 'clone', 'install', 'run', 'slug'],
         include: [
            {
               model: Techstack,
               as: 'techstacks',
               attributes: ['id', 'techstack']
            },
            {
               model: Feature,
               as: 'features',
               attributes: ['id', 'title', 'description']
            }
         ],
      })

      return result
   } catch (error) {
      console.log(error)
   }
}

const getOneProject = async (req, res, next) => {
   try {
      const { slug } = req.params

      const project = await Project.findOne({
         where: { slug: slug },
         attributes: ['id', 'title', 'description', 'linksourcode', 'thumbnail', 'introduction', 'clone', 'install', 'run', 'slug'],
         include: [
            {
               model: Techstack,
               as: 'techstacks',
               attributes: ['id', 'techstack']
            },
            {
               model: Feature,
               as: 'features',
               attributes: ['id', 'title', 'description']
            }
         ],
      })

      return project
   } catch (error) {
      next(error)
   }
}

module.exports = {
   createProject,
   getAllProject,
   getOneProject
}