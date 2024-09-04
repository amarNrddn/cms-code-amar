'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jobs.belongsToMany(models.About, {
        through: 'Abouts',
        foreignKey: 'jobId',
        as: 'bio',
      })
    }
  }
  Jobs.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    job: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};