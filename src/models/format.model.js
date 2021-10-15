
const FormatSchema = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const { INTEGER, STRING } = DataTypes
  
    const Format = sequelize.define('format', {
      id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      label: {
        type: STRING,
        allowNull: false,
        unique: true
      }
    });


    return { Format }
  
  }
  
  export default FormatSchema;