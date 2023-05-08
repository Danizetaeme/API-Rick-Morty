import React from "react"

// Este componente se utiliza para mostrar botones de paginación en una lista de elementos, lo que permite al usuario navegar entre páginas de resultados. El componente espera recibir cuatro propiedades: "prev", "next", "onPrevious" y "onNext".
const Pagination = ({ prev, next, onPrevious, onNext }) => {

// El componente tiene dos funciones llamadas "handlePrevious" y "handleNext". Estas funciones se ejecutan cuando el usuario hace clic en los botones de paginación "Previous" y "Next", respectivamente. Cuando el usuario hace clic en el botón "Previous", se llama a la función "onPrevious". Y cuando el usuario hace clic en el botón "Next", se llama a la función "onNext".
    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

// Luego, el componente utiliza un operador ternario para determinar si se deben mostrar los botones "Previous" y "Next". Si "prev" es verdadero, se muestra el botón "Previous". Si "next" es verdadero, se muestra el botón "Next".

// Por último, el componente devuelve un fragmento de HTML con dos botones de paginación. Si "prev" es verdadero, se muestra el botón "Previous". Si "next" es verdadero, se muestra el botón "Next". Ambos botones se configuran para llamar a las funciones "handlePrevious" y "handleNext", respectivamente, cuando el usuario hace clic en ellos.
    return (
        <div className="my-5">
            <nav>
                <ul className="pagination justify-content-center">
                    {prev ? (
                        <li className="page-item">
                            <button className="page-link custom-link" onClick={handlePrevious}>Previous</button>
                        </li>
                    ) : null}

                    {next ? (
                        <li className="page-item">
                            <button className="page-link custom-link" onClick={handleNext}>Next</button>
                        </li>
                    ) : null}              
                </ul>
        </nav>
        </div >
    )
}
// El componente se exporta al final del archivo para que pueda ser utilizado en otros archivos de React.
export default Pagination





