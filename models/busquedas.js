const axios = require('axios');


class Busquedas {

    historial = ['Barcelona', 'Madrid', 'Bilbao'];

    constructor() {
        //TODO: leer db si existe
    }

    async ciudad(lugar = '' ){

        try {
                    //peticion http
                    // console.log('ciudad' ,lugar);
                    const resp = await axios.get('https://reqres.in/api/users?page=2');
                    console.log(resp.data);
            
                    return []; // Retornar los lugares ue coincidan con lo introducido
            
        } catch (error) {
            return [];
        }
    }

}

module.exports = Busquedas;