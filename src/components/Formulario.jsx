import React,{useState} from 'react'
import Error from './Error'
import shortid from 'shortid';
const Formulario = ({agregarNuevoGasto}) => {

    const [nombre,guardarNombre]=useState('');
    const[cantidad,guardarCantidad]=useState(0);
    const [error,guardarError]=useState(false);


//agregando gasto
const agregarGasto = e =>{
    e.preventDefault();
    //validar
    if(cantidad<1 || isNaN(cantidad) || nombre.trim()===''){
        guardarError(true);
        return;
    }

    //construir el gasto
    const gasto ={
        nombre,cantidad,id: shortid.generate()
    }

    //pasar al comp principal
    agregarNuevoGasto(gasto)


    //resetear el form
    guardarNombre('')
    guardarCantidad(0)
}


    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
                {error? <Error mensaje='Ambos campos son obligatorios'/>:null}
            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. transporte'
                    value={nombre}
                    onChange={e=>guardarNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 300'
                    value={cantidad}
                    onChange={e=>guardarCantidad(parseInt(e.target.value)|| cantidad)}

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