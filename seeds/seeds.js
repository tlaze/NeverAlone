const sequelize = require('../config/config');
const { User, Post, Comments } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentsData = require('./commentsData.json');