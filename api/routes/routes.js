const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const { ClientModel } = require('../models/clients.models');
const { BankingInformationModel } = require('../models/banking-info.models');
const { BillModel } = require('../models/bills.models');
const { ProductModel } = require('../models/products.models');
const { BillProductsModel } = require('../models/bills-products.models');

const app = express();
app.use(bodyParser.json());
const ObjectId = mongoose.Types.ObjectId; // Needs to be changed

// ---------- CLIENTS ----------
// Get - All
const getClients = app.get('/api/v1/clients', (req, res) => {
    ClientModel.find().then(clientList => {
        res.json(clientList);
    }, err => {
        res.status(500).send(err);
    });
});
  
// Get - One
const getClient = app.get('/api/v1/clients/:uuid', (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        res.status(404).send('Not found');
    } else {
        ClientModel.findById(id).then(client => {
        if (!client) {
            res.status(404).send();
        } else {
            res.send(client);
        };
        }).catch(err => {
            res.status(500).send(err);
        });
    };
});

// Post
const postClient = app.post('/api/v1/clients', (req, res) => {
    const newClient = new ClientModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emailAddress: req.body.emailAddress,
        address: req.body.address,
        postalCode: req.body.postalCode,
        countryIsoCode: req.body.countryIsoCode
    });
    newClient.save().then(client => {
        res.send(client);
        console.log(client);
    }).catch(err => {
        res.status(500).send(err);
    });
});

// ---------- BILLS ----------
// Get - All
const getBills = app.get('/api/v1/bills', (req, res) => {
    BillModel.find().then(billList => {
        res.json(billList);
    }, err => {
        res.status(500).send(err);
    });
});
  
// Get - One
const getBill = app.get('/api/v1/bills/:uuid', (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        res.status(404).send('Not found');
    } else {
        BillModel.findById(id).then(client => {
        if (!client) {
            res.status(404).send();
        } else {
            res.send(client);
        };
        }).catch(err => {
            res.status(500).send(err);
        });
    };
});

// ---------- PRODUCTS ----------
// Get - All
const getProducts = app.get('/api/v1/products', (req, res) => {
    ProductModel.find().then(productList => {
        res.json(productList);
    }, err => {
        res.status(500).send(err);
    });
});
  
// Get - One
const getProduct = app.get('/api/v1/products/:uuid', (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        res.status(404).send('Not found');
    } else {
        ProductModel.findById(id).then(product => {
        if (!client) {
            res.status(404).send();
        } else {
            res.send(product);
        };
        }).catch(err => {
            res.status(500).send(err);
        });
    };
});

// Post
const postProduct = app.post('/api/v1/products', (req, res) => {
    const newProduct = new ProductModel({
        model: req.body.model,
        photo: req.body.photo,
        unitPrice: req.body.unitPrice,
        isAvailable: req.body.isAvailable,
        stock: req.body.stock
    });
    newProduct.save().then(client => {
        res.send(client);
        console.log(client);
    }).catch(err => {
        res.status(500).send(err);
    });
});

// ---------- BILLS PRODUCTS ----------


// ---------- EXPORTING PREVIOUS MODULES ----------
module.exports = {
    getClients,
    getClient,
    postClient,
    getBills,
    getBill,
    getProducts,
    getProduct,
    postProduct,
    app
};