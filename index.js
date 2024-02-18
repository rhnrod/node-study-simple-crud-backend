const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);


mongoose.connect('mongodb+srv://rhnrod:h0MrfsPdcvb7NejJ@backenddb.bcgwivb.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to database!')
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        });
    })
    .catch(() => {
        console.log('Connection failed!')
    });