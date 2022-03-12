require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const fetch = require('node-fetch');
const moment = require('moment');

// get start and end date
const end_date = moment();
const start_date = moment().subtract('30', 'days');

// parse application
// urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// parse application
// json
app.use(bodyParser.json());


app.get('/getBitcoinInfo', async (req, res) =>{
    // const getCurrencyCode = req.query.currency;

    // GET/HEADER is not allowed to have body, query strings are allowd!!
    const getCurrencyCode = req.body.currency;
    try {
        // check whether user gives a right currency
        if(getCurrencyCode === undefined || getCurrencyCode === '' ){
            res.status(400);
            res.send({'message': 'Please check and give a valid currency'});
        } else{
            // fetch current price of bitcoin
            const currentPrice = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/${getCurrencyCode}.json`);
            const obj = await currentPrice.json();
            const rate_float = obj.bpi[getCurrencyCode.toUpperCase()].rate_float;

            // fetch highest and lowest price of bitcoin
            const coindeskHistoricalPrice = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date.format('YYYY-MM-DD')}&end=${end_date.format('YYYY-MM-DD')}&currency=${getCurrencyCode}`);
            const obj2 = await coindeskHistoricalPrice.json();
        
            let maxRate = -Infinity;
            let minRate = Infinity
            for(prop in obj2.bpi) {
                if(obj2.bpi[prop] > maxRate) {
                    maxRate = obj2.bpi[prop];
                }
                if(obj2.bpi[prop] < minRate) {
                    minRate = obj2.bpi[prop]
                }
            }

            // response JSON
            const response = {
                rate_float: rate_float,
                maxRate: maxRate,
                minRate: minRate,
                currency: getCurrencyCode.toUpperCase(),
                message: "Thank you for using my API"
            };

            // send response
            res.send(response);
        }
    } catch (error) {
        // send error
        res.status(400);
        res.send({'error': 'Something went wrong'});
    };
});

// defining the port
const PORT = process.env.PORT || 4050;
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});