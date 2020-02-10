import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita';

function App() {

    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    //console.log(citasIniciales);

    if (!citasIniciales){
      citasIniciales=[];
    }

    const [ citas, guardarCitas ] = useState(citasIniciales);
  
    //useEffect para realizar ciertas operaciones para cuando cambia el state
    useEffect( () => {
  
      // para que no tire error de dependencia, sino hay que ponerlo en el [] final del useEffect
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));
      //console.log(citasIniciales);
      
      if (citasIniciales){
        localStorage.setItem('citas', JSON.stringify(citas));
      }
      else{
        localStorage.setItem('citas', JSON.stringify([]));
      }
  
    }, [citas])

  const crearCita = (cita) => {
    console.log(cita);
    guardarCitas([
      ...citas,
      cita
    ])
  }

  //funcion que elimina una cita por su id
  const eliminarCita = id => {
    //console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id)
  
    guardarCitas(nuevasCitas);
  
  }
  
  //mensaje condicional
  //console.log(citas.length);
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus Citas';

  return (
    <Fragment> 
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">       
            <h2>{titulo}</h2>
            {
              citas.map(cita => (                
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
