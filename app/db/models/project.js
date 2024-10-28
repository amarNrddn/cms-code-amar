'use strict';
const {
  Model
} = require('sequelize');
const slugify = require('slugify')
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasMany(models.Techstack, { foreignKey: 'projectId', as: 'techstacks', onDelete: 'CASCADE' });
      Project.hasMany(models.Feature, { foreignKey: 'projectId', as: 'features', onDelete: 'CASCADE' });
    }
  }
  Project.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    linksourcode: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    introduction: DataTypes.STRING,
    clone: DataTypes.TEXT,
    install: DataTypes.TEXT,
    run: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  Project.beforeCreate((project, options) => {
    project.slug = `${slugify(project.title, { lower: true, strict: true })}-${project.id}`;
  });
  return Project;
};