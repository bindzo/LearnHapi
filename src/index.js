'use strict';
const { setupServer } = require('./server');

const init = async () => {
    const server = await setupServer()
    server.start();
};

init().catch((err) => {
    console.log(err);
    process.exit(1);
});

