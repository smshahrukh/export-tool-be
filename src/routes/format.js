import express from 'express';
const router = express.Router();

import db from "../models/index"

const fetchFomats = async (req, res, next) => {
    try {
        const formats = await db.Format.findAll();
        res.status(200).json({
            formats
        })
    }
    catch(e) {
        console.log(e);
        res.status(400).json({
            "msg": "Error"
        })
    }
}

const postFomat = async (req, res, next) => {
    const { body } = req;
    const format = await db.Format.create(body);
    res.status(200).json({
        format
    })
}

router.post('/', postFomat)
router.get('/', fetchFomats)


export default router;