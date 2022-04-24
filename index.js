// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config()


// ROUTES
const productRoute = require("./routes/product");


const PORT = process.env.PORT;

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Access to database granted')
})
.catch((error) => {
    console.log(error)
});

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => console.log(`Listening on port ${PORT}`))




