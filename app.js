const express = require('express');

const app = express();
const port =5000;
const greetings = process.env.GREETINGS || 'OK';

app.get('/health',(req,res) => {
    res.status(200).send(greetings);
});

const PORT = 5000;

app.listen(port,()=> {
    console.log(`servidor funcionando en puerto ${PORT}`);

});

