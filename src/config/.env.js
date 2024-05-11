//El require con el config hace que las variables se seteen(el archivo .env de la carpeta principal)
require('dotenv').config();
const { get } = require('env-var');

const envs = {
	PORT: get('PORT').required().asPortNumber(),
	PUBLIC_PATH:  get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
	envs
}