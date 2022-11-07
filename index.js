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

                //Mostramos resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', nombre);
                console.log('Lat:', lat);
                console.log('Lng:', lng);
                console.log('Temperatura:',);
                console.log('Mínima:',);
                console.log('Máxima:',);
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
