
const SaleSchema = (sequelize, Sequelize, Customer) => {
    const { DataTypes } = Sequelize
    const { INTEGER, STRING, DATE } = DataTypes

    const Sale = sequelize.define('sale', {
        id: {
            type: INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        customerId: {
            type: INTEGER,
        },
        orderDate: {
            type: DATE
        },
        status: {
            type: STRING,
        }
    });

    Customer.belongsTo(Sale)

    return { Sale }
}

export default SaleSchema;