const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(58008)