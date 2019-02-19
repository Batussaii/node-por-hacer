const descripcion = {
    
        demand: true,
        alias: `d`,
        desc: `Descripcion de la tarea por hacer`
     };

const completado = {
    
        default: true,
        alias: `c`,
        desc: `Marca como completado o pendiete la tarea`
     };



const argv = require(`yargs`)
.command(`crear`, `Crear un elemento por hacer`,{
descripcion})
.command(`actualizar`, `Actualiza el estado completado de una tarea`,
{descripcion,
 completado})
.command(`borrar`, `Eliminado de una tarea`,
    {descripcion})
.help()
.argv;

// const opts = {
//     descripcion: {
//         demand: true,
//         alias: `d`,
//         desc: `Descripcion de la tarea por hacer`
//      },
//      completado: {
//          default: true,
//         alias: `c`,
//         desc: `Marca como completado o pendiete la tarea`
//      }
// }
module.exports = {
argv
}