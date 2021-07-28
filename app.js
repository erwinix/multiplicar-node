const { crearArchivo, listarTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors')

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow), 'creado')
    .catch(err => console.log(err));
//let comando = argv._[0];


// switch (comando) {

//     case 'listar':
//         listarTabla(argv.base, argv.limite);
//         break;

//     case 'crear':
//         crearArchivo(argv.base, argv.limite)
//             .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
//             .catch(e => console.log(e));
//         break;

//     default:
//         console.log('Comando no reconocido');

// }



// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]