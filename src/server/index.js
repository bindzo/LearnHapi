'use strict';
require('dotenv').config();

const Hapi = require('@hapi/hapi');
const pluginsList = require('../plugins');
const routes = require('../routes');

const setupServer = async () => {
    const server = Hapi.server({
      port: process.env.NODE_PORT || 3000,
      host: process.env.NODE_HOST,
      debug: false,
      routes: {
        cors: {
          origin: ['*'], // an array of origins or 'ignore'
          credentials: true // boolean - 'Access-Control-Allow-Credentials'
        }
      }
    });
    console.log(process.env.NODE_PORT);
    console.log('Server running on %s', server.info.uri);
    await server.route(routes)
    await server.register(pluginsList)
    return server;
};

module.exports = {setupServer}