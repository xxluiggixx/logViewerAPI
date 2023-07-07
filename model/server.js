const express = require('express');
var cors = require('cors')


class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT || 3000;

        
        //middlewares
        this.middlewares();
        
        //route
        this.route();
    }

    route(){

        this.app.use('/api/logs', require('../routes/logs.routes'));

    }

    middlewares(){
        //cors
        this.app.use( cors({
            origin: '*'
        }) );
        //Carga de HTML Statico
        this.app.use(express.static('public'));
    }

    listen(){

        this.app.listen(this.PORT, () =>{
            console.log('Servidor corriendo en el puerto: ', this.PORT)
        })
    }

}

module.exports = Server;