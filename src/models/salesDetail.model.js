
const SaleDetailSchema = (sequelize, Sequelize, Sale, Product) => {
    const { DataTypes } = Sequelize
    const { INTEGER, STRING, DATE } = DataTypes

    const SaleDetail = sequelize.define('saleDetail', {
        id: {
            type: INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        orderId: {
            type: INTEGER,
        },
        productId: {
            type: INTEGER,
        },
        quantity: {
            type: INTEGER,
        },
        unitPrice: {
            type: INTEGER,
        },
        discount: {
            type: INTEGER
        }
    });

    Sale.belongsTo(SaleDetail, { foreignKey: "orderIId"});
    // SaleDetail.hasMany(Sale, {as: 'orderDetails'})
    // SaleDetail.hasMany(Sale, {as: 'orderDetails'})

    Product.belongsTo(SaleDetail, { foreignKey: "productId" });


    return { SaleDetail }

}

export default SaleDetailSchema;