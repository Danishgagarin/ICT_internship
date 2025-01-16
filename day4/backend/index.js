const express = require('express');
const app = express();
require("./connection")

app.use(express.json())

const empModel = require("./models/employee");

app.get('/', (req, res) => {
    res.send("heloooo");
});

app.get('/trial', (req, res) => {
    res.send("NOKKANDA VITTO");
});

app.post('/add', async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "Data Added" })
    } catch (error) {
        console.log("error")
    }
});

app.get('/view', async (req, res) => {
    try {
        const employee = await empModel.find()
        res.send(employee);
    } catch (error) {   
        console.log("error")
    }
});

app.listen(2005, () => {
    console.log("The server is running on port 2005")
})


// require('./connection');

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("suid");
// });

// app.get('/trial', (req, res) => {
//     res.send("Trial succesfulll");
// });

// app.listen(2004, () => {
//     console.log("The server is running on port 2004");
// });