const { Sequelize, Model } = require('sequelize');
const { uuidv4 } = require('uuid/v4');

const ProductModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING, DATE, BOOLEAN, FLOAT } = Sequelize;
    const Product = sequelize.define('Product', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        brand: {
            type: STRING,
            allowNull: false
        },
        model: {
            type: STRING,
            allowNull: false
        },
        photo: {
            type: STRING,
            allowNull: false
        },
        unitPrice: {
            type: FLOAT,
            allowNull: false
        },
        isAvailable: {
            type: BOOLEAN,
            allowNull: false
        },
        stock: {
            type: INTEGER,
        },
        uuid: {
            type: String,
            defaultValue: uuidv4()
        }
        
    });
    return Product;
}

module.exports = { ProductModel };