const express = require('express');
var cors = require('cors')
const app = express();
// app.use(express.json())
app.use(cors())
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

app.delete('/remove/:id', async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "delete" })
    } catch (error) {
        console.log("error an macha")
    }
});

app.put('/update/:id', async (req, res) => {
    try {
        const updatedEmployee = await empModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send({ message: "Update successful", updatedEmployee });
    } catch (error) {
        console.log("error an macha")
    }
});

app.listen(8012, () => {
    console.log("The server is running on port 8012")
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