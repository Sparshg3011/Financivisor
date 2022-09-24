const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://test:test123@atlascluster.yh8f2.mongodb.net/expensetracker', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://sparshg3011:sgakt2022@cluster0.to4yyn1.mongodb.net/sheymoney', {useNewUrlParser : true, useUnifiedtopology : true});
mongoose.connection.on('error', err => console.log(err));
mongoose.connection.on('connected', () => console.log("Mongo DB Connection Successfull"));