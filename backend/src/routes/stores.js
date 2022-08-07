const {Router}=require('express');
const router = Router();

const {getTOP5Visitadas,getTiendas,getTop20Ventas,getTop5Area} = require ('../controllers/storesControl.js');
router.route('/').get(getTiendas)
router.route('/top5Visitadas').get(getTOP5Visitadas)
router.route('/top20Ventas').get(getTop20Ventas)
router.route('/top5Area').get(getTop5Area)


module.exports = router
