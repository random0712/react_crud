require('dotenv/config');
const { getItems, deleteItem, saveItem, getItemById } = require('./server/models/item');
require('./server/mongo');
const app = require('express')();
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors())


app.route("/item")
    .get((req, res) => getItemById(req, res))

app.route("/")
    .post((req, res) => saveItem(req, res))
    .get((req, res) => getItems(req, res))
    .delete((req, res) => deleteItem(req, res))




app.listen(8080, () => {
    console.log("Server start in port 8080");
});

module.exports = app;