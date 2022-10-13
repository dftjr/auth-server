'use strict';

// Start up DB Server
const { db } = require('./src/auth/models/index.js');
const { startup } = require('./src/server');
const PORT = process.env.PORT || 3001;
db.sync()
  .then(() => 

    // Start the web server
    startup(PORT)
  );
