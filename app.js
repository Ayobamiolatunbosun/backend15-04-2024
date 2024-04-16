const port = 7007
const http = require('http')
const fs = require("fs")

// storing pages in a variable
const homePage = fs.readFileSync("./pages/index.html")
const aboutPage = fs.readFileSync("./pages/about.html")
const contactPage = fs.readFileSync("./pages/contact.html")
const testimonialPage = fs.readFileSync("./pages/testimonial.html")
const errorPage = fs.readFileSync("./pages/error.html")

const server = http.createServer((req,response)=>{
    // response.end("this is my creation")
    let path = req.url
    if(path==="/"||path==="/home"){
        response.end(homePage)
    }  else if(path==="/about"){
        response.end(aboutPage)
    } else if(path==="/testimonials"){
        response.end(testimonialPage)
    }else if(path==="/contact"){
        response.end(contactPage)
    } else 
    (response.end(errorPage))
})



server.listen(port,()=>{
    console.log("Welocome to creation3")
})