const { Blog } = require('../db/models')

const createBlog = async (req, res, next) => {
   try {
      const { title, content, code_snippet } = req.body
      const thumbnail = req.file ? `/upload/thumbnails/${req.file.filename}` : null;

      const blog = await Blog.create({ title, content, thumbnail, code_snippet })

      return blog

   } catch (error) {

   }
}

const getAllBlogs = async (req, res, next) => {
   try {
      const blogs = await Blog.findAll()

      return blogs
   } catch (error) {
      next(error)
   }
}

const getOneBlog = async (req, res, next) => {
   try {
      const { id } = req.params

      const blog = await Blog.findOne({ where: { id: id } })

      return blog
   } catch (error) {
      next(error)
   }
}

module.exports = {
   createBlog,
   getAllBlogs,
   getOneBlog
}