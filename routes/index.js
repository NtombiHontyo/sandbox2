const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.taliRoute);
routes.get('/massa', lesson1Controller.massaRoute);
routes.get('/mviko', lesson1Controller.mvikoiRoute);

module.exports = routes;