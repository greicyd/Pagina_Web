const {Router}=require('express');
const router = Router();

const {getTop10Customers,getStatistics,getTop5Area} = require ('../controllers/storesControl.js');
router.route('/').get(getStatistics)

router.route('/').get(getTop10Customers)
    
router.route('/').get(getTop5Area);


module.exports = router
