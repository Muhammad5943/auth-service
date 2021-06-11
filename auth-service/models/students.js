'use strict';
const {
  Model
} = require('sequelize');

const { v4 : uuidv4 } =  require('uuid')

module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Students.init({
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    class_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birth_day: DataTypes.DATE,
    sex: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    learning_time: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};