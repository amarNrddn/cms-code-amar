'use strict';
const {
  Model
} = require('sequelize');
const slugify = require('slugify')

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blog.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    content: DataTypes.TEXT,
    code_snippet: DataTypes.TEXT,
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Blog',
  });

  Blog.beforeCreate((blog, options) => {
    blog.slug = `${slugify(blog.title, { lower: true, strict: true })}-${blog.id}`;
  });
  return Blog;
};