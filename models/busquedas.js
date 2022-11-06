const axios = require('axios');


class Busquedas {

    historial = ['Barcelona', 'Madrid', 'Bilbao'];

    constructor() {
        //TODO: leer db si existe
    }

    async ciudad(lugar = '' ){
        //peticion http
        console.log(lugar);

        return []; // Retornar los lugares ue coincidan con lo introducido
    }

}

module.exports = Busquedas;