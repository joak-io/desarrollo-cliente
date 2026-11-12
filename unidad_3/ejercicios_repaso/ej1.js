let pedidos = [
    {
        id : 1,
        cliente : "Ruben",
        items : [12, 45, 75],
        urgente : true
    },
    {
        id : 2,
        cliente : "Daniel",
        items : [22, 42, 5],
        urgente : false
    },
    {
        id : 3,
        cliente : "Joaquin",
        items : [12, 42, 7],
        urgente : false
    }
];


function aplicarDescuento(total, porcentaje = 10){
    let descontado;
    return  descontado = total - (porcentaje / 100);
};

const calcularTotalPedido = function (impuesto, ...precios) {
    let total = precios.reduce((acc, n) => acc + n, 0);
    return total += total*(impuesto / 100);
};

function procesarLotePedidos(listaPedidos, callbackCalculo, callbackDescuento){
    let totalPedido;
    let total = 0;
    for(pedido of pedidos){
            totalPedido = callbackCalculo(21, ...(pedido.items));
            if (pedido.urgente == false){
                totalPedido = callbackDescuento(totalPedido);
            }
        total += totalPedido;
       }
    return total;
};

console.log(procesarLotePedidos(pedidos, calcularTotalPedido, aplicarDescuento));

let pedidosCien = pedidos.filter(() => );