const http = require('http')
const myserver = http.createServer((request, response)=>
{
    response.write("welcome to server")
    response.end()
})
myserver.listen(5500)
{
    console.log("Server started successfully")
}