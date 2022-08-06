const storesControl = {};
const db = require("./database.js");

storesControl  = (req, res) => {
    db.query("Select * FROM estudiantes", (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}
