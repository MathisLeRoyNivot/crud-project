const { Sequelize, Model } = require('sequelize');
const { uuidv4 } = require('uuid/v4');
const { ClientModel } = require('./clients.models');

const BankingInformationModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    const BankingInformation = sequelize.define('Banking info', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        clientId: {
            type: INTEGER,
            allowNull: false
        },
        cardNumber: {
            type: STRING,
            allowNull: false
        },
        cryptogram: {
            type: STRING,
            allowNull: false
        },
        expirationDate: {
            type: STRING,
            allowNull: false
        },
        uuid: {
            type: String,
            defaultValue: uuidv4()
        }
        
    });
    BankingInformation.associate = () => {
        BankingInformation.belongsTo(ClientModel, {foreignKey: 'clientId'})
    };
    return BankingInformation;
}

module.exports = { BankingInformationModel };