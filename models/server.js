const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Routes of my app
        
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.get('/', ( req, res) => {
            res.send('Hello World');
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port );
        });
    }

}

module.exports = Server;