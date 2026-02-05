// const http = require('http');

// const myserver = http.createServer((req,res)=>{
//     // console.log("server1");
//     // res.end("This is my first server");
//     if(req.url =='/'){
//         res.end("<h1>ABES ENGINEERING COLLEGE</h1><img src='https://i.ytimg.com/vi/s913a50qcOM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgYChXMA8=&rs=AOn4CLDRO2rowO6RTWYBJYudSIW9cQJG1w' width='400' />");
//     }
//     else if(req.url =='/about'){
//         res.end("We are student");
//     }
//     else if(req.url =='/class'){
//         res.end("IT-A");
//     }
   
//     else{
//         res.end("404 page is not found");
//     }
// });

// myserver.listen(8000,()=>console.log("server is run"))


//  const fs = require('fs')
// //  fs.writeFileSync("./CE-A.txt","we are student of CE A")
// //  fs.writeFileSync("./ABES.txt","Abes provide btech mtech")
// //  const result =fs.readFileSync("./CSE.txt","utf-8")
// //  console.log(result)
//     // fs.writeFile("./CEE-A.txt","we are student of cee a", ()=>{})
// fs.readFile("./CEE-A.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(
//             "error",err
//         )
//     }
//     else{
//         console.log(result)
//     }
// })

const fs = require('fs');

fs.appendFileSync("./CSE.txt",`and they are not good`);


