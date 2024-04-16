const fs = require("fs")
const content =  fs.readFileSync("./files/monday.txt", "utf-8");
console.log(content)

const content2 = "tuboy"
fs.writeFileSync("./files/tuboy.txt", content2)

const node = "Node is a JS routine environment built on google chrome V8 engine that is open source"
fs.writeFileSync("./files/node.txt", node)

fs.readFile("./files/ayo.txt","utf-8",(error,data)=>{
    if (error){
        console.log(error)
    } else {
        console.log(data)}
})

// read asynchronously
fs.readFile("./files/node.txt","utf-8",(error,data)=>{
    if (error){
        console.log(error)
    } else {
        console.log(data)}
})


const pre = "Precious is a bad/semi good girl"
// write asynchronously
fs.writeFile("./files/Amaka.txt",pre, ()=>{
    console.log("data entered successfully")
})

