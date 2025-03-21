const express = require('express')
const app = express()

// app.get('/', (reg, res) => {
//     res.send('Hello Clurix Tech')
// })
app.use(express.static('./methods-public'))

app.listen(3000, () => {
    console.log("App is listening on the port 3000");
})
