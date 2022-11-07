require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

// console.log(process.env.MAPBOX_KEY);

const main = async () => {


    const busquedas = new Busquedas
    let opt = '';
    console.clear();

    do {
        opt = await inquirerMenu();
        console.log({opt});

        

        switch (opt) {
            case 1: //Buscar Ciudad
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: '); 
                //Buscar las ciudades
                const lugares = await busquedas.ciudad(termino)
                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                const { nombre,lng,lat } = lugares.find(lugar => lugar.id === id);
                // console.log(lugarSeleccionado);
                //Obtenemos datos del clima
                const {temp,min,max,desc} = await busquedas.climaLugar(lat, lng);
                //Mostramos resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', nombre.green);
                console.log('Lat:', lat);
                console.log('Lng:', lng);
                console.log('Temperatura:',temp);
                console.log('Mínima:',min);
                console.log('Máxima:',max);
                console.log('Descripción del clima:',desc);
                break;
            case 2: //Obtener historial
    
                break;
            case 0: //Salir
    
                break;
            default:
                break;
        }

        if(opt !== 0) await pausa();

    } while (opt !== 0);

    

}

main();
