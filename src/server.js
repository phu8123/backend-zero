require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database')

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME || 8888;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

configViewEngine(app);

app.use('/', webRoutes);



/* connection.query('SELECT * FROM users  ',
    function (err, results, fields) {
        console.log(results);

    }
); */



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
