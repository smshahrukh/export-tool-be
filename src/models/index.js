import Sequelize from 'sequelize';
import FormatSchema from './format.model'
import CustomerSchema from './customer.model'
import ProductSchema from './product.model'
import SaleSchema from './sale.model'
import SaleDetailSchema from './salesDetail.model'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/db/db.sqlite'
});


const { Format } = FormatSchema(sequelize, Sequelize)
const { Customer } = CustomerSchema(sequelize, Sequelize)
const { Sale } = SaleSchema(sequelize, Sequelize, Customer)
const { Product } = ProductSchema(sequelize, Sequelize)
const { SaleDetail } = SaleDetailSchema(sequelize, Sequelize, Sale, Product)

const db = {
  Sequelize,
  sequelize,
  Format,
  Customer,
  Product,
  Sale,
  SaleDetail
};

module.exports = db;