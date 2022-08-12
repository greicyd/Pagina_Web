const storesControl = {};
const db = require("./database.js");

//Obtener las 10 tiendas mas visitadas
storesControl.getTOP10Visitadas = (req, res) => {
    db.query(" select Store_ID, Daily_Customer_Count from store order by Daily_Customer_Count DESC limit 0,10;", (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

//Obtiene la informacion de todas las tiendas
storesControl.getTiendas = (req, res) => {
    db.query(" select * from store", (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

//Obtiene las 20 tiendas con mayor ventas
storesControl.getTop20Ventas = (req, res) => {
    db.query(" select Store_ID, Store_Sales from store order by Store_Sales DESC limit 0,20;", (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

//Obtener las 5 tiendas con mas area
storesControl.getTop5Area = (req, res) => {
    db.query("select Store_ID, Store_Area from store order by Store_Area DESC limit 0,5;", (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}
module.exports = storesControl;
