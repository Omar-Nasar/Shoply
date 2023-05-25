const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/err-handler');
const port=process.env.port||3000


//middleware
app.use(bodyParser.json())
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorHandler);
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));


//Routes
const productsRouter=require('./routes/products');
const categoriesRouter = require('./routes/categories');
const usersRouter=require('./routes/users');
const ordersRoutes = require('./routes/orders');

const api = process.env.API_URL;

app.use(cors());
app.options('*',cors())


app.use(`${api}/products`,productsRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/users`,usersRouter);
app.use(`${api}/orders`, ordersRoutes);



// connecting to database
mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ecommerce'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})




app.get('/',(req,res)=>{
  res.send('API ..........')
  
})



app.listen(port, ()=>{

    console.log(`server is running http://localhost:${port}`);
    console.log(api)
})



// mongoose.connect("mongodb://0.0.0.0:27017/ecommerce",{
//          useNewUrlParser: true,
//          useUnifiedTopology: true,
//         autoIndex: true, 
         
// })
// .then(()=>{
//     console.log('Database Connection is ready.......................')
// })
// .catch((err)=> {
//     console.log(err);
// })
