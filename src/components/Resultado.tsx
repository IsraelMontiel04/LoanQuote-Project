type props={
    total:number
    cantidad:number
    plazo:string
}

const Resultado=({total, cantidad, plazo}: props) =>{
    
  return (
    <div className="resulltado">
        <h2>Cotizacion:</h2>
        <p>La cantidad solicitada es: ${cantidad} </p>
        <p>A pagar en: {plazo} </p>
        <p>Su pago mensual es de: ${(total / Number(plazo)).toFixed(2)} </p>
        <p>Total a pagar: ${(total).toFixed(2)} </p>
    </div>
  )
}

export default Resultado
