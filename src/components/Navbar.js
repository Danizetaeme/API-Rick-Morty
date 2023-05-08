import React from 'react'

const Navbar = ({ brand }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand text-uppercase" href='/'>{brand}</a>
            </div>
        </nav>
    )
}

export default Navbar


// Este componente muestra una barra de navegación que tiene un logotipo o marca que se puede personalizar. El componente espera recibir una propiedad llamada "brand" que se utilizará como la marca de la barra de navegación.

// La función "Navbar" utiliza la sintaxis de desestructuración de objetos para extraer la propiedad "brand" del objeto de propiedades que se pasa al componente. Luego, devuelve un fragmento de HTML que representa una barra de navegación con un logotipo.

// El logotipo se muestra como un enlace a la página principal del sitio web, que está representado por la barra diagonal ("/") en el atributo "href" del enlace.

// La barra de navegación se construye utilizando los estilos predefinidos de Bootstrap, una biblioteca de CSS y JavaScript que se utiliza comúnmente en proyectos de desarrollo web. La barra de navegación tiene un fondo oscuro ("bg-dark") y utiliza una fuente de texto clara ("navbar-dark").

// Por último, el componente se exporta al final del archivo para que pueda ser utilizado en otros archivos de React.