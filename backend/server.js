const express = require('express');
const dotenv = require('dotenv').config({path: '.env'});
const PORT =  process.env.PORT || '3001';


const app = express();
app.use(express.json());


// routes
app.get('/', (req, res) => {
    res.status(200).send('data sended')
})



// listener

app.listen(PORT, () => {
    console.log(`listening request on port ${PORT}`)

})