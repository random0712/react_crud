const mongoose = require('mongoose');

const { ItemSchema } = require('../schemas/item');
const handleError = require('../handleError');
const Item = mongoose.model("Item", ItemSchema);

async function getItems(req, res, next= () => {}) {
    const itemsArray = await Item.find(function (err, items) {
        if(err) return handleError(err);

        return items;
    })

    if(itemsArray.length === 0) return res.send("Não tem nenhum item cadastrado!");
    res.send(itemsArray);
    next()
};

async function getItemById(req, res, next= () => {}) {
    const { _id } = req.query;


    if(!mongoose.isValidObjectId(_id)) {
        return res.send({error: "Id invalido!", status: 404});
    } else {
        const item = await Item.findById(_id, function (err, item) {
            if (!item) return null;
            if (err) return handleError(err);

            return item;
        })

        if (!item) {
            return res.send({error: "Nenhum item encontrado!", status: 404});
        } else {
            res.status(200).send(item);
        }
    }


    next()
};

function saveItem(req, res, next= () => {}) {
    const { _id, name, amount, description } = req.body;
    if(!name || !amount || !description) return res.status(400).send("Existem campos não preenchidos");

    if(_id) {
        Item.findByIdAndUpdate(_id, { name: name, amount: amount, description: description }, (err) => {
            if(err) return handleError(err);

            return res.status(200).send("Atualizado com sucesso!");
        })
    } else {
        const newItem = new Item({
            name,
            amount,
            description
        });

        newItem.save((err, item) => {
            if (err) return handleError(err);

            return res.status(200).send(item);
        })
    }

    next()
};

async function deleteItem(req, res, next= () => {}) {
    const reqItem = req.body;
    console.log(req)
    Item.findByIdAndDelete(reqItem._id, function (err, docs) {
        if (err) return handleError(err);
        if(docs === null) {
            return res.status(404).send("Não foi possivel achar o item selecionado!");
        }

        return res.status(200).send("DELETED: " + docs);
    });
    next()
};



module.exports = { getItems, deleteItem, saveItem, getItemById };