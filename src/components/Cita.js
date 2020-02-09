import React from 'react';

const Cita = ( { cita, eliminarCita } ) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Mascota: <span>{cita.propietario}</span></p>          
        <p>Mascota: <span>{cita.fecha}</span></p>          
        <p>Mascota: <span>{cita.hora}</span></p>                      
        <p>Mascota: <span>{cita.sintomas}</span></p>

        <button className="button-eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id) }
        >Eliminar &times;</button>                                                        
    </div>
);

export default Cita;