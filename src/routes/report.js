import express from 'express';
const router = express.Router();

import db from "../models/index"


const fetchReport = async (req, res, next) => {
    const { query } = req;
    const today = new Date();
    const startDate = query.startDate || today; 
    const endDate = query.endDate || today; 

    try {
        // const reptData = await db.SaleDetail.findAll({
        //     attributes: [],
        //     include: [{
        //         model: db.Sale,
        //         as: "orderDetails"
        //     }, {
        //         model: db.Product
        //     }],
        // });

        const reportData = [ {
            productTitle: "Pepsi 500 ml",
            quantity: 5,
            totalAmount: 550,
        },
        {
            productTitle: "Water 500 ml",
            quantity: 4,
            totalAmount: 450,
        },
        {
            productTitle: "Parker pen",
            quantity: 2,
            totalAmount: 170,
        },
        {
            productTitle: "Milk 500 mll",
            quantity: 1,
            totalAmount: 35,
        },
        {
            productTitle: "Eggs 1 dozen",
            quantity: 1,
            totalAmount: 115,
        },
    
    ]
        
        res.status(200).json({
            data: reportData
        })
    }
    catch(e) {
        console.error(e)
        res.status(404).json({
            error: "No data found"
        })
    }



}

router.get('/', fetchReport)


export default router;