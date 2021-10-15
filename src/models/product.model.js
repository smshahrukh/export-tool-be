
const ProductSchema = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const { INTEGER, STRING } = DataTypes

    const Product = sequelize.define('product', {
        id: {
            type: INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: STRING,
        },
        unitId: {
            type: INTEGER,
        },
        unitPrice: {
            type: INTEGER,
        }
    });


    return { Product }

}

export default ProductSchema;