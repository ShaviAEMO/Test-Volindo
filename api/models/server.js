
const express = require('express')


class Server{
    constructor() {
         this.app = express();
         this.port = process.env.PORT;
         this.peliculasPath = '/api/peliculas';

         this.middlewares();

         this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            next();
        });

        this.app.use(this.peliculasPath, require('../routes/peliculas'));
    }

    listen(){
        this.app.listen(process.env.PORT,() =>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}
module.exports = Server;