const express = require('express')
const app = express()
const port = 3000





app.get('/tip/:total/:tipPercentage', function(req, res) { 
    let total = req.params.total;
    let tipPercentage = req.params.tipPercentage;
    let tip = (tipPercentage / 100) * total
    res.send("Your tip is " + tip + "dollars.")


 })


app.get('/greeting/:name', function(req, res) {
    res.send("Hello there, " + req.params.name)

})


app.get('/greeting', function(req, res) {
    res.send('Hello Stranger')
})




app.listen(port, function() {
    console.log('Express is running on ' + port)
})

