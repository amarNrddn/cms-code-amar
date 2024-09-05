'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Abouts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Abouts.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    jobId: {
      type: DataTypes.UUID,
      references: {
        model: 'Jobs',
        key: 'id'
      }
    },
    bioId: {
      type: DataTypes.UUID,
      references: {
        model: 'Bio',
        key: 'id'
      }
    }

  }, {
    sequelize,
    modelName: 'Abouts',
  });


  return Abouts;
};