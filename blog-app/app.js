require('dotenv').config()
const { Template } = require('ejs')
const express = require('express')
const expressLayout = require("express-ejs-layouts")
const connectDB = require('./config/db')
const methodOverride = require('method-override')
const app = express()

PORT = 4000 || process.env.PORT;
connectDB()

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// app.get('/', (req, res) =>{
//     res.send('Hello Clurix Tech')
// })

// Template Engine
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use("/", require("./routes/main"));
app.use("/", require("./routes/admin"))
app.use("/", require("./routes/contact"))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})