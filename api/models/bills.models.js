const { Sequelize, Model } = require('sequelize');
const { uuidv4 } = require('uuid/v4');
const { ClientModel } = require('./clients.models');

const BillModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING, DATE, BOOLEAN } = Sequelize;
    const Bill = sequelize.define('Bill', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        clientId: {
            type: INTEGER
        },
        totalPrice: {
            type: INTEGER,
            allowNull: false
        },
        isPaid: {
            type: BOOLEAN,
            defaultValue: false
        },
        paidAt: {
            type: DATE,
        },
        address: {
            type: STRING,
            allowNull: false
        },
        emittedAt: {
            type: DATE,
            defaultValue: Sequelize.NOW
        },
        uuid: {
            type: String,
            defaultValue: uuidv4()
        }
    });
    Bill.associate = () => {
        Bill.belongsTo(ClientModel, {foreignKey: 'clientId'})
    };
    return Bill;
}

module.exports = { BillModel };