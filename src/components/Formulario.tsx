import { useState } from "react"
import {calcularTotal} from "../helpers"

type Props={
  cantidad:number
  setCantidad:(value:number)=>void
  plazo:string
  setPlazo:(value:string)=>void
  setTotal:(value:number)=>void
}

function Formulario({cantidad, setCantidad, plazo, setPlazo, setTotal}: Props) {

  const[error, setError]=useState(false);

  const calcularPrestamo  = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(cantidad === 0 || plazo === ""){
      setError(true);
      return;
    }
    setError(false);

    const total= calcularTotal(cantidad, plazo);
    setTotal(total)
    /* console.log(total); */
    
  }

  return (
    <>
    <form onSubmit={calcularPrestamo}>
      <div className="column">
        
        <div>
          <label>Cantidad Prestamos</label>
          <input type="number" placeholder="Ej:3000"
          onChange={(e) => setCantidad(Number(e.target.value)) } />
        </div>
        
        <div>
          <label> Plazo para pagar</label>
          <select onChange={(e) => setPlazo(e.target.value) }>
            <option value="">Seleccionar</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </select>
        </div>

      </div>

      <div className="btnSubmit">
        <input type="submit" value="Calcular" />
      </div>

    </form>

    {(error) ? <p className="error">Todos los campos son obligatorios...</p> : ""}
    </>
  )}

export default Formulario
