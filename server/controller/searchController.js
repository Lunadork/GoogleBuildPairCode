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
        const searchId = (Math.floor(Math.random() *15 +1)) ;
        const selectedResult = search.findById(searchId);
        console.log(selectedResult);
            if (!selectedResult) 
            {
                throw new Error;
            }
        res.status(200);
        res.json(selectedResult)
    } 
    catch (err) 
    {
        console.log(err);
        res.status(404);
        res.send(err.toString());
    }
});

router.get('/', (req,res) =>
{
    res.send("Not yet implemented")
});

module.exports = router;