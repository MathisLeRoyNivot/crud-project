const { Sequelize, Model } = require('sequelize');
const { uuidv4 } = require('uuid/v4');

const ClientModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    const Client = sequelize.define('Client', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: STRING,
            allowNull: false
        },
        lastname: {
            type: STRING,
            allowNull: false
        },
        emailAddress: {
            type: STRING,
            allowNull: false
        },
        address: {
            type: STRING,
            allowNull: false
        },
        postalCode: {
            type: STRING(3),
            allowNull: false
        },
        countryIsoCode: {
            type: STRING,
        },
        createdAt: {
            type: DATE,
            defaultValue: Sequelize.NOW
        },
        uuid: {
            type: String,
            defaultValue: uuidv4()
        }
        
    });
    return Client;
}

module.exports = { ClientModel };