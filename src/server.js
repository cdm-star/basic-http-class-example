const http = require('http');

const fs = require('fs');


const port = process.env.PORT || process.env.NODE_PORT || 3000;


//many files, background wait till file been loaded

const index = fs.readFileSync(`${__dirname}/../client/client.html`);


const onRequest = ( request,response) => {
    console.log(request.url);

    if(request.url === '/'){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(index);
    response.end();
    }else{
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('No page here!');
    response.end();
    }


}

http. createServer(onRequest).listen(port,()=>{

    console.log(`Listening on port ${port}`);
})