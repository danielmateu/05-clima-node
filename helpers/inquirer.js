

const inquirer = require('inquirer');

require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desas realizar?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            },
        ]
    }
]

const inquirerMenu = async () => {
    
    console.log('==========================='.green)
    console.log('   Selecciona una opción'.white)
    console.log('===========================\n'.green)

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

/**
 * It waits for the user to press enter before continuing.
 */
const pausa = async() => {
    console.log();
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

/**
 * It's a function that returns a promise that resolves to the value of the input field.
 * @param message - The message that will be displayed to the user.
 * @returns The value of the input.
 */
const leerInput = async (message) => {
    console.log();
    const question = [
        {
            type:'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Ingresa un valor'
                }
                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc
}

const listarLugares = async(lugares = []) => {
    console.log();
    const choices = lugares.map( (lugar, i) => {
        const idx = `${i + 1}.`.green;

        return {
            value: lugar.id,
            name: `${idx} ${lugar.nombre}`,
        }
    });

    choices.unshift({
        value: '0',
        name: `${('0.').green } Cancelar`,
    });

    const preguntas = [
        {
            type    : 'list',
            name    : 'id',
            message : 'Seleccione lugar:',
            choices
        }
    ]

    const {id} = await inquirer.prompt(preguntas);
    return id;


    // {
    //     value: tarea.id,
    //     name: `${'1.'.green} Crear tarea`
    // },

}
const mostrarListadoChecklist = async(tareas = []) => {

    console.log();

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value   : tarea.id,
            name    : `${idx} ${tarea.desc}`,
            checked : (tarea.completadoEn) ? true : false
        }
    });


    const pregunta = [
        {
            type    : 'checkbox',
            name    : 'ids',
            message : 'Seleccione',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(pregunta);
    return ids;

}

const confirmar = async(message) => {
    const question = {
        type: 'confirm',
        name: 'ok',
        message
    }

    const {ok} = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoChecklist,
}