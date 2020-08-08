import React,{useState} from 'react'

const Formulario = () => {

    const [nombre,guardarNombre]=useState('');
    const[cantidad,guardarCantidad]=useState(0);

//agregando gasto
const agregarGasto = e =>{
    //validar

    //construir el gasto

    //pasar al comp principal

    //resetear el form
}


    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. transporte'
                    value={nombre}
                    onChange={e=>guardarNombre(parseInt(e.target.value))}
                />
            </div>
            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 300'
                    value={cantidad}
                    onChange={e=>guardarCantidad(e.target.value)}

                />
            </div>
            <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
            />
        </form>
     );
}
 
export default Formulario;