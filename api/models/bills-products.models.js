const { Sequelize, Model } = require('sequelize');
const { uuidv4 } = require('uuid/v4');
const { BillModel } = require('./bills.models');
const { ProductModel } = require('./products.models');

const BillProductsModel = (sequelize, Sequelize) => {
    const { INTEGER } = Sequelize;
    const BillProducts = sequelize.define('Bill products', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        billId: {
            type: INTEGER,
            allowNull: false,
        },
        productId: {
            type: INTEGER,
            allowNull: false,
        },
        quantity: {
            type: INTEGER,
            allowNull: false
        }
    });
    BillProducts.associate = () => {
        BillProducts.belongsTo(BillModel, {foreignKey: 'billId'})
        BillProducts.belongsTo(ProductModel, {foreignKey: 'productId'})
    };
    return BillProducts;
}

module.exports = { BillProductsModel };