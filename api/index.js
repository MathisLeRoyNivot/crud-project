const { express } = require('express');
const { path } = require('path');
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server's running on port : ${PORT}`));