import React from 'react';

const Cita = ( {cita} ) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Mascota: <span>{cita.propietario}</span></p>          
        <p>Mascota: <span>{cita.fecha}</span></p>          
        <p>Mascota: <span>{cita.hora}</span></p>                      
        <p>Mascota: <span>{cita.sintomas}</span></p>                                                  
    </div>
);

export default Cita;