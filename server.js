const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

// Modular routes
const mainRoutes = require('./routes/main');
const productRoutes = require('./routes/products');
const customRoutes = require('./routes/custom');
const auctionRoutes = require('./routes/auction');
const profileRoutes = require('./routes/profile');

app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/custom-orders', customRoutes);
app.use('/auction', auctionRoutes);
app.use('/profile', profileRoutes);

// simple 404
app.use((req,res)=> res.status(404).render('404'));

app.listen(PORT, ()=> console.log('ARTIFI modular server running on http://localhost:'+PORT));
