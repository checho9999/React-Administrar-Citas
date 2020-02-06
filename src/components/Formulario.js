import React, { Fragment, useState } from 'react';

const Formulario = () => {

    // Crear state de citas
    const [ cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '' 
    });

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // funcion que se ejecuta cada vez que en usuario escribe en un input
    const actualizarState = (e) => {
        console.log("Nombre: " + e.target.name + " Valor: " + e.target.value);
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    
    const submitCita = (e) => {
        e.preventDefault(); // para que no envie los datos por el metodo GET con el querystring
        alert('enviando...')
    }

    return (       

        <Fragment>

            <h2>Crear Cita</h2>

            <form
                onSubmit={submitCita}            
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}              
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
            
        </Fragment>
     );
}

export default Formulario;