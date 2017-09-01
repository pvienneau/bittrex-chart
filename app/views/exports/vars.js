require('dotenv').config();

exports.api_url = `http://${process.env.HOST}:${process.env.PORT}/api`;
