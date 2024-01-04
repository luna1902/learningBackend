const fs = require("fs");

function callbackfn(err,data)
{
    console.log(data);
}

fs.readFile("a.txt","utf-8",callbackfn);



// function Sum(Counter)
// {
//     var i,s=0;
//     for(i=0;i<=Counter;i++)
//     {
//       s=s+i;
//     }
//     return s;
// }

// var calculated= Sum(100);
// console.log(calculated);