const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")





const main = async () => {

    let opt = '';
    
    do {
        opt = await inquirerMenu();
        console.log({opt});

        if(opt !== 0) await pausa();

        switch (opt) {
            case 1: //Buscar Ciudad

                break;
            case 2: //Obtener historial
    
                break;
            case 0: //Salir
    
                break;
            default:
                break;
        }

    } while (opt !== 0);

    await pausa();

}

main();