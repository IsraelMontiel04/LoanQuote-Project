import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import { useState } from 'react';
import Resultado from './components/Resultado';
import Mensaje from './components/Mensaje';


function App() {
  const [cantidad, setCantidad]=useState(0);
  const [plazo, setPlazo]=useState("")
  const [total, setTotal] = useState(0)

  let componente;
  if(total === 0){
    componente= <Mensaje />
  }else{
    componente = <Resultado total={total} cantidad={cantidad} plazo={plazo}  />
  }

  return (
    <>
        <Header titulo="Cotizador de Prestamos" />
        <div className="container">
          <Formulario 
          setCantidad={setCantidad} 
          cantidad={cantidad} 
          plazo={plazo} 
          setPlazo={setPlazo}
          setTotal={setTotal}
        />
        </div>
        <div className="mensaje">
          {componente}
        </div>
    </>
  )
}

export default App