
// props (parametros que enviamos en funciones)
const Presentacion = ({estado}) => {

  console.log(estado);  

  return (
    <>
        { // En llaves JS (Operador ternario simple)
            estado && (
                <>
                <h1>Bienvenidos ADSO 1 a Los Hooks en REACTJS</h1>
                <h1>Coordinacion Malambo</h1>
                </>
            )
      } 
    </>
  )
}

export default Presentacion