const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();
app.use(express.json());
const userRoute = require('./routes/usersRoute')
const transactionRoute = require('./routes/transactionsRoute');

app.use('/api/users/', userRoute);
app.use('/api/transactions/', transactionRoute);

const port = 8000;

app.get('/', (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`App listening on port ${port}.`));