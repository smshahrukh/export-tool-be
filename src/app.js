import express from "express";
import db from './models/index'

import cors from "cors"
import indexRouter from "./routes/index.js"

const app = express();
const PORT = process.env.PORT || 8880

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors())

db.sequelize.sync({ force: true })
  .then(function () {
    const currentDate = new Date();
    const dateString = currentDate.toISOString()
    db.Format.bulkCreate([
      { id: 1, label: "HTML", createdAt: dateString, updatedAt: dateString },
      { id: 2, label: "XML", createdAt: dateString, updatedAt: dateString },
      { id: 3, label: "CSV", createdAt: dateString, updatedAt: dateString }
    ]);

    db.Customer.bulkCreate([
      { id: 1, name: "Joe Doe", countryId: 1, dateContract: dateString, createdAt: dateString, updatedAt: dateString },
      { id: 2, name: "Amy Neelson", countryId: 1, dateContract: dateString, createdAt: dateString, updatedAt: dateString },
      { id: 3, name: "Bob Gartner", countryId: 1, dateContract: dateString, createdAt: dateString, updatedAt: dateString },
    ])

    db.Product.bulkCreate([
      { id: 1, title: "Pepsi 500 ml", unitId: 112, unitPrice: 60, createdAt: dateString, updatedAt: dateString },
      { id: 2, title: "Water 500 ml", unitId: 113, unitPrice: 50, createdAt: dateString, updatedAt: dateString },
      { id: 3, title: "Parker pen", unitId: 121, unitPrice: 90, createdAt: dateString, updatedAt: dateString },
      { id: 4, title: "Milk 500 ml", unitId: 122, unitPrice: 40, createdAt: dateString, updatedAt: dateString },
      { id: 5, title: "Eggs 1 dozen", unitId: 222, unitPrice: 120, createdAt: dateString, updatedAt: dateString },
    ])
    
    db.Sale.bulkCreate([
      { customerId: 1, orderDate: "2021-10-01 10:24:19.002 +00:00", status: "pending", createdAt: dateString, updatedAt: dateString },
      { customerId: 2, orderDate: "2021-10-06 10:24:19.002 +00:00", status: "pending", createdAt: dateString, updatedAt: dateString },
      { customerId: 3, orderDate: "2021-10-19 10:24:19.002 +00:00", status: "pending", createdAt: dateString, updatedAt: dateString },
      { customerId: 1, orderDate: "2021-10-12 10:24:19.002 +00:00", status: "pending", createdAt: dateString, updatedAt: dateString },
    ])
    
    db.SaleDetail.bulkCreate([
      { id: 1, orderId: 1, productId: 1, quantity: 2, unitPrice: 60, discount: 5, createdAt: dateString, updatedAt: dateString },
      { id: 2, orderId: 1, productId: 2, quantity: 3, unitPrice: 50, discount: 5, createdAt: dateString, updatedAt: dateString },
      { id: 3, orderId: 2, productId: 3, quantity: 1, unitPrice: 90, discount: 5, createdAt: dateString, updatedAt: dateString },
      { id: 4, orderId: 2, productId: 4, quantity: 2, unitPrice: 40, discount: 5, createdAt: dateString, updatedAt: dateString },
      { id: 5, orderId: 3, productId: 2, quantity: 4, unitPrice: 50, discount: 5, createdAt: dateString, updatedAt: dateString },
      { id: 6, orderId: 4, productId: 5, quantity: 3, unitPrice: 120, discount: 5, createdAt: dateString, updatedAt: dateString },
    ])
  })

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});