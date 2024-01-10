const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req, res)
{   
    var Counter= req.query.counter;
    var calculated= Sum(Counter);
    console.log(calculated);
    var answer = "the sum is " + calculated;
    res.send(answer);
}

function createUser(req,res)
{
    res.send("Hello World");
}
app.get('/handlesum', handleFirstRequest)    
// every time the route called is "/handlesum", the function handleFirstrequest is called
app.post('/createuser', createUser)
app.get('/handlesum2', handleFirstRequest)

function started() {  
        console.log('Example app listening on port ${port}' )
    
}
 

app.listen(port, started)


function Sum(Counter)
{
    var i,s=0;
    for(i=0;i<=Counter;i++)
    {
      s=s+i;
    }
    return s;
}



// const fs = require("fs");
// const express = re
// // fs is an external library that has all the logic required to read from an external file and write into it
// function callbackfn(err,data)
// {
//     console.log(data);
// }

// fs.readFile("a.txt","utf-8",callbackfn);
// // here, reading from a file "a.txt" and logging data using callbackfn ---utf is the encoding




