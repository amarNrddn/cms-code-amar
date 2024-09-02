'use strict';
const {
  Model, UUID, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class my_jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  my_jobs.init({
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    job: DataTypes.JSON,
    city: DataTypes.STRING,
    about: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'my_jobs',
  });
  return my_jobs;
};