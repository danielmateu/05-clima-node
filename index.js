const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async () => {


    const busquedas = new Busquedas
    let opt = '';
    
    do {
        opt = await inquirerMenu();
        console.log({opt});

        

        switch (opt) {
            case 1: //Buscar Ciudad
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                
                await busquedas.ciudad(lugar);

                //Buscar las ciudades

                //Seleccionar el lugar

                //Obtenemos datos del clima

                //Mostramos resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:',);
                console.log('Lat:',);
                console.log('Lng:',);
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