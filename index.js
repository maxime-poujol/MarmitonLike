const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const Authentification = require('./authentification/authentification.js');

require("dotenv").config();
const PORT = process.env.PORT || 8000 // this is very important


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(Authentification.passeport.initialize())


app.get('/', function (req, res) {
    res.send('Homepage')
})

//Router for ingredients
app.use('/ingredient', require('./routers/ingredientRouter.js'))

//Router for recipes
app.use('/recipes', require('./routers/recipeRouter.js'))




//USER
const user = require("./database/user.js");
app.get('/users', Authentification.passeport.authenticate('jwt', {session: false}), user.selectAll);
app.get('/user/:id', Authentification.passeport.authenticate('jwt', {session: false}), user.selectOneById);
app.post('/user', Authentification.passeport.authenticate('jwt', {session: false}), user.createObj);
app.put('/user', Authentification.passeport.authenticate('jwt', {session: false}), user.updateObj);
app.delete('/user', Authentification.passeport.authenticate('jwt', {session: false}), user.deleteObj);

//TEST authentification
app.post('/login', async (req, res) => {
    const result = await Authentification.login(req.body.email, req.body.password);
    res.status(result.status);
    res.json(result.message);
})
app.get('/private', Authentification.passeport.authenticate('jwt', {session: false}), (req, res) => {
    res.send('private. user : ' + req.user.email);
})

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
})


