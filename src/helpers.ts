export const calcularTotal = (cantidad: number | string, plazo: string)=>{
    const cantidadInt = parseInt(cantidad as string)
    const plazoInt = parseInt(plazo as string)
    
    let totalCantidad;
    if(cantidadInt <= 1000){
        totalCantidad = cantidadInt * 0.25
    }else if(cantidadInt > 1000 && cantidadInt <= 5000){
        totalCantidad = cantidadInt * 0.20
    }else if(cantidadInt > 5000 && cantidadInt <=10000){
        totalCantidad = cantidadInt * 0.15
    }else{
        totalCantidad = cantidadInt * 0.10
    }
    
    let totalPlazo: number | undefined;
    switch (plazoInt) {
        case 3:
            totalPlazo = cantidadInt * 0.05
            break;
        case 6:
            totalPlazo = cantidadInt * 0.10
            break;
        case 12:
            totalPlazo = cantidadInt * 0.15
            break;
        case 24:
            totalPlazo = cantidadInt * 0.20
            break;    
        default:
            break;
    }

    return totalCantidad + (totalPlazo || 0) + cantidadInt
    /* console.log(totalPlazo); */
    
}