const { Blog } = require('../db/models')

const createBlog = async (req, res, next) => {
   try {
      const {
         title,
         titleconten,
         content,
         introduction,
         code_snippet,
         solution,
         instalation,
         elucidation,
         tags,
         slug } = req.body
      const thumbnail = req.file ? `/upload/thumbnails/${req.file.filename}` : null;
      const parsedTags = JSON.parse(tags)   

      const blog = await Blog.create({
         title,
         titleconten,
         content,
         introduction,
         thumbnail,
         solution,
         instalation,
         code_snippet,
         elucidation,
         tags: parsedTags,
         slug
      })

      return blog

   } catch (error) {

   }
}

const getAllBlogs = async (req, res, next) => {
   try {
      const blogs = await Blog.findAll({
         attributes: ['id', 'title', 'thumbnail', 'createdAt', 'content', 'slug'],
         order: [['createdAt', 'DESC']]
      })

      return blogs
   } catch (error) {
      next(error)
   }
}


const getOneBlog = async (req, res, next) => {
   try {
      const { slug } = req.params

      const blog = await Blog.findOne({
         where: { slug: slug },
         attributes: [
            "title", 
            "titleconten",
            "content", 
            "introduction", 
            "thumbnail", 
            "solution", 
            "instalation", 
            "code_snippet", 
            "elucidation", 
            "tags",
            "createdAt"
         ]
      })

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