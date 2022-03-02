const express = require ('express');
const router = express.Router();

const search = require('../models/searchModel.js')

router.get('/searchAll', (req, res) => 
{

    res.set('Content-Type', 'application/json');
    let theData = search.all;
    //send the results
    res.status(200);
    res.json(theData);

});

router.get('/random', (req,res) =>
{
    res.set('Content-Type', 'application/json');

    try 
    {
        const quoteId = (Math.floor(Math.random() *14 +1)) ;
        const selectedQuote = quote.findById(quoteId);
        console.log(selectedQuote);
            if (!selectedQuote) 
            {
                throw new Error;
            }
        res.status(200);
        res.send(JSON.stringify(selectedQuote, null, 2));
    } 
    catch (err) 
    {
        console.log(err);
        res.status(404);
        res.send(err.toString());
    }
});

module.exports = router;