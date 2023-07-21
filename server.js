const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world');
});

baseRouter.post('/add', (req, res) => {
    console.log(req.body.name);
    res.json({ "name": "himanshu" });
});


baseRouter.post('/subtract', (req, res) => {
    res.json({ "": null });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});