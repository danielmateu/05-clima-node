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
                    const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Barcelona.json?proximity=ip&types=place%2Cpostcode%2Caddress%2Ccountry%2Cregion%2Cdistrict%2Clocality%2Cneighborhood%2Cpoi&language=es&access_token=pk.eyJ1IjoiZGFuaWRldi1iY24iLCJhIjoiY2xhNmphbDEyMWt6aDNvcGhqOTZxeDJsNCJ9.mXy9jTDDTQtm2Qr4U5r2mg&limit=5');
                    console.log(resp.data);
            
                    return []; // Retornar los lugares ue coincidan con lo introducido
            
        } catch (error) {
            return [];
        }
    }

}

module.exports = Busquedas;