const express = require('express')
const app = express()
const port = 3000


function middlware(req,res,next)          //working through middleware          always callled before route handlers
{                                          // middleware provides authentication
    console.log("from inside middleware" + req.headers.Counter);
    next();                 //if middleware calls next() only then will the control move forward

   //in case middlewares are not calling next() due to some reasons, they use res.send("error message")  to tell that request won't be processed and there is error from inside middleware
}
app.use(middlware);                                 //registering a middleware

function handleFirstRequest(req, res)
{   
    console.log(req.headers);                                   // working through headers
    var Counter= req.headers.counter;
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




