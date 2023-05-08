import React from "react";

const characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-5">
                        <div className="card" style={{ minWidth: "200px"}}>
                            <img src={item.image} alt="" />
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title">{item.name}</h5>
                                <hr />
                                <p><strong className="custom-info">Specie:</strong> {item.species}</p>
                                <p><strong className="custom-info">Location:</strong> {item.location.name}</p>
                                <p><strong className="custom-info">Status:</strong> {item.status}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default characters

// Este componente espera recibir una propiedad llamada "characters", que es un arreglo de objetos que representan personajes.

// El componente utiliza un operador de desestructuración en la definición de la función para obtener la propiedad "characters" del objeto de propiedades que se pasa al componente. Si la propiedad "characters" no se pasa al componente, se usa un arreglo vacío como valor predeterminado.

// Luego, el componente devuelve un fragmento de HTML que contiene una fila (row) de tarjetas de personajes. Cada tarjeta de personaje se crea utilizando el método de JavaScript "map" en el arreglo de personajes que se pasó al componente.

// Dentro de la función "map", se itera sobre cada objeto de personaje y se devuelve un elemento HTML para cada uno. El elemento HTML es una tarjeta de Bootstrap que contiene la imagen del personaje, su nombre, especie, ubicación y estado.

// La propiedad "key" se utiliza para identificar de manera única cada elemento generado por el método "map". Esto es importante para mejorar el rendimiento del componente al actualizar solo los elementos que han cambiado.

// Por último, el componente se exporta al final del archivo para que pueda ser utilizado en otros archivos de React.