import express from 'express';
const router = express.Router();

import formatRouter from './format';
import reportRouter from './report';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    msg: "You got here.",
  })
});

router.use('/format', formatRouter);
router.use('/report', reportRouter);

export default router;