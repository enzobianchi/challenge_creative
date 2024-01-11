function queue_time(clientes, n) {
    let suma = 0;
    //Si no hay clientes en la cola, retorno 0.
    if (clientes.length == 0) {
        return 0;
    }
    //Si solo hay una caja, retorno la suma de todos los tiempos.
    if (n == 1) {
        for (let i = 0; i < clientes.length; i++) {
            suma += clientes[i];
        }
        return suma;
    }
    //Inicializo las cajas con un tiempo 0.
    let cajasRegistradoras = new Array(n);
    for (let i = 0; i < n; i++) {
        cajasRegistradoras[i]=0;
    }
    for (let i = 0; i < clientes.length; i++) {
        // Asigno el cliente a la caja registradora con el tiempo mínimo.
        const minTiempo = Math.min(...cajasRegistradoras);
        const minIndex = cajasRegistradoras.indexOf(minTiempo);
        cajasRegistradoras[minIndex] += clientes[i];
    }
    // El tiempo total es el tiempo máximo de todas las cajas registradoras.
    console.log(cajasRegistradoras);
    return Math.max(...cajasRegistradoras);
}
console.log(queue_time([5,3,4], 1));
console.log(queue_time([10,2,3,3], 2));
console.log(queue_time([2,3,10], 2));