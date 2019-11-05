const { Sequelize, Model } = require('sequelize');
const { uuidv4 } = require('uuid/v4');

const ProductModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING, DATE, BOOLEAN, FLOAT } = Sequelize;
    const Product = sequelize.define('Product', {
        Id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        Brand: {
            type: STRING,
            allowNull: false
        },
        Model: {
            type: STRING,
            allowNull: false
        },
        Photo: {
            type: STRING,
            allowNull: false
        },
        UnitPrice: {
            type: FLOAT,
            allowNull: false
        },
        IsAvailable: {
            type: BOOLEAN,
            allowNull: false
        },
        CountryIsoCode: {
            type: STRING,
        },
        EmittedAt: {
            type: DATE,
            defaultValue: Sequelize.NOW
        },
        Uuid: {
            type: String,
            defaultValue: uuidv4()
        }
        
    });
    return Product;
}

module.exports = { ProductModel };