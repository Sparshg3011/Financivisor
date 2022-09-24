const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();
app.use(express.json());
const path = require('path');
const userRoute = require('./routes/usersRoute')
const transactionRoute = require('./routes/transactionsRoute');
app.use('/api/users/', userRoute);
app.use('/api/transactions/', transactionRoute);

const port =process.env.PORT || 8000;

if(process.env.NODE_ENV === 'production')
{
    app.use('/', express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    })
}

app.listen(port, () => console.log(`App listening on port ${port}.`));
