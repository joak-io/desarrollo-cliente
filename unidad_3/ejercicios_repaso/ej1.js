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
    return  descontado = total * porcentaje / 100;
};

const calcularTotalPedido = function (impuesto, ...precios) {
    let total = precios.reduce((acc, n) => acc + n, 0);
    return total += total*(impuesto / 100);
};


const IMPUESTO = 21;

function procesarLotePedidos(listaPedidos, callbackCalculo, callbackDescuento){
    let resultados = [];

    for (let i = 0; i < listaPedidos.length; i++) {
        let pedido = listaPedidos[i];
        let total = callbackCalculo(IMPUESTO, ...pedido.items);  
        if (pedido.urgente !== true)  {
            total = callbackDescuento(total);
        }
        resultados.push({ id: pedido.id, cliente: pedido.cliente, total: total });
    }

    return resultados;
};

const resultados = procesarLotePedidos(pedidos, calcularTotalPedido, aplicarDescuento);

const informe = resultados.filter(r => r.total > 100).map(
    r => "Pedido " + r.id + " de " + r.cliente + ": " + r.total.toFixed(2) + " €");

console.log(informe);
