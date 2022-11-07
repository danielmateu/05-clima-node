const axios = require('axios');


class Busquedas {

    historial = ['Barcelona', 'Madrid', 'Bilbao'];

    constructor() {
        //TODO: leer db si existe
    }

    get paramsMapbox () {
        return {
            'access_token': 'pk.eyJ1IjoiZGFuaWRldi1iY24iLCJhIjoiY2xhNml6NzBtMDFnMTNvbXF4bWs3M3BzdyJ9.KVnHCs7UweqcqiKo5wFObA',
            'limit': 5,
            'lenguage': 'es'
        }
    }

    async ciudad(lugar = '' ){

        try {
                    //peticion http
                    const instance = axios.create({
                        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                        params: this.paramsMapbox
                    });

                    const resp = await instance.get();
                    
                    console.log(resp.data);
            
                    return []; // Retornar los lugares ue coincidan con lo introducido
            
        } catch (error) {
            return [];
        }
    }

}

module.exports = Busquedas;