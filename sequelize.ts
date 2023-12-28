import {DataTypes} from "sequelize";

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('chizhgpt', 'chijastir', 'admin', {
    host: '77.222.43.35',
    dialect: 'postgres',
})

export const Chats = sequelize.define('chats', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    chat: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING
    },
    user_name: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'chats',
    timestamps: false,
})

export const Messages = sequelize.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    chat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
    },
    text: {
        type: DataTypes.TEXT,
    }
},{
    tableName: 'messages',
    timestamps: false,
})

/*
INSERT INTO messages(role, text, chat_id) SELECT ('system', 'Joe The Student',
id FROM chats WHERE chat = 777 LIMIT 1)
 */