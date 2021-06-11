'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Absences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Absences.hasMany(models.Students, {
        foreignKey: 'student_uuid',
        as: 'student'
      })
    }
  };
  Absences.init({
    student_uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    entrance:DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Absences',
  });
  return Absences;
};