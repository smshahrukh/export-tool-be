
const CustomerSchema = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const { INTEGER, STRING, DATE } = DataTypes
  
    const Customer = sequelize.define('customer', {
      id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      countryId: {
        type: INTEGER,
      },
      dateContract: {
          type: DATE
      }
    });


    return { Customer }
  
  }
  
  export default CustomerSchema;