const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');
const PORT = process.env.PORT || 3000;

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT);