const fs = require('fs');

const axios = require('axios');

class Busquedas {

    historial = [];
    dbPath = './db/database.json'

    constructor() {
        //TODO: leer db si existe
        this.leerDB()
    }

    get historialCapitalizado(){
        //Capitalilzar cada palabra



        return this.historial.map(lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1) );

            return palabras.join(' ');
        });
    }

    get paramsMapbox () {
        return {
            'access_token': process.env.MAPBOX_KEY || '',
            'limit': 5,
            'lenguage': 'es'
        }
    }

    get paramsOpenWeather () {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
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
                    // console.log(resp.data.features);
                    return resp.data.features.map(lugar => ({
                        id      : lugar.id,
                        nombre  : lugar.place_name,
                        lng     : lugar.center[0],
                        lat     : lugar.center[1],
                    }));
            

            
        } catch (error) {
            return [];
        }
    }
    
    async climaLugar(lat,lon) {

        try {
            //Instancia de axios.create()
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsOpenWeather, lat, lon}
            })
            const resp = await instance.get();
            const {weather, main} = resp.data

            //resp.data

            return {
                desc    : weather[0].description,
                min     : main.temp_min,
                max     : main.temp_max,
                temp    : main.temp
            }


        } catch (error) {
            console.log(error);
        }
    }

    agregarHistorial(lugar = ''){

        //TODO: Prevenir duplicados
        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return;
        }

        
        
        /* Checking if the length of the `historial` array is greater than 6. If it is, it will remove
        the first two elements of the array. */


        this.historial.splice(0,4);
        

    

        this.historial.unshift(lugar.toLocaleLowerCase());

        //Grabar en db
        this.guardarDB()
    }

    guardarDB(){

        const payload = {

            historial: this.historial
        }

        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    leerDB(){

        //Debe de existir...
        /* Checking if the file exists. If it does not exist, it will return. */
        if(!fs.existsSync(this.dbPath)) return;

        // const info .... reaFileSync .... path {encoding:'utf-8}
        /* Reading the file and storing it in the variable info. */
        const info = fs.readFileSync(this.dbPath, {encoding:'utf-8'});
        // const data = JSON.... (info);
        /* Parsing the JSON string into a JavaScript object. */
        const data = JSON.parse( info );

        // this.historial = ...historial
        /* Assigning the value of the `historial` property of the `data` object to the `historial`
        property of the `this` object. */
        this.historial = data.historial;
    }
}

module.exports = Busquedas;