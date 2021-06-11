'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailAbsences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // DetailAbsences.hasOne(models.Absences, {
      //   foreignKey: 'absent_id',
      //   as: 'absent'
      // })
    }
  };
  DetailAbsences.init({
    absent_id: DataTypes.BIGINT,
    student_name: DataTypes.STRING,
    time_in: DataTypes.DATE,
    time_out: DataTypes.DATE,
    information: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DetailAbsences',
  });
  return DetailAbsences;
};