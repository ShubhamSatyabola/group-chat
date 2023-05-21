const express = require('express');
const bodyparser= require('body-parser')
const cors = require('cors')

const sequelize = require('./util/database')

const userRoutes = require('./routes/user')

const app = express();
app.use(cors());
app.use(bodyparser.json({extended:false}))

app.use('/user', userRoutes)

sequelize.sync()
.then(app.listen(3000))
.catch(err=>console.log(err))
