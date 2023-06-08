const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session')
const path = require('path');


const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');
const homeRoute = require('./routes/homeRoute')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
    })
);

const connection_string = process.env.ATLAS_URI;
mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/register', userRoute)
app.use('/login', loginRoute)
app.use('/home', homeRoute)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
