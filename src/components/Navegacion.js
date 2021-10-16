import React from 'react'

import {Link } from "react-router-dom"
import Flores1 from '../img/CampoFlores.jpg'
import Jrasoles1 from '../img/jirasoles.jpg'
import Lago1 from '../img/lago.jpg'
import Montañas1 from '../img/montañas.jpg'
import Nieve1 from '../img/nieve.jpg'
import Planetas1 from '../img/planetas.jpg'
import Universo1 from '../img/universo.jpg'
import Valdio1 from '../img/valdio.jpg'
function Navegacion() {
    return (
        <div className="container bloque galleria">
            <Link to="/CampoFlores" className="link">
                <figure>
                    <img src={Flores1} alt="flores" className="img-tamaño"/>
                    <figcaption>Flores</figcaption>
                </figure>
            </Link>
            <Link to="/Jirasoles" className="link">
                <figure>
                    <img src={Jrasoles1} alt="jirasoles" className="img-tamaño"/>
                    <figcaption>Jirasoles</figcaption>
                </figure>
            </Link>
            <Link to="/Lago" className="link">
                <figure>
                    <img src={Lago1} alt="lago" className="img-tamaño"/>
                    <figcaption>Lago</figcaption>
                </figure>
            </Link>
            <Link to="/Montañas" className="link">
                <figure>
                    <img src={Montañas1} alt="montañas" className="img-tamaño"/>
                    <figcaption>Montañas</figcaption>
                </figure>
            </Link>
            <Link to="Nieve" className="link">
                <figure>
                    <img src={Nieve1} alt="nieve" className="img-tamaño"/>
                    <figcaption>Nieve</figcaption>
                </figure>
            </Link>
            <Link to="Planetas" className="link">
                <figure>
                    <img src={Planetas1} alt="planetas" className="img-tamaño"/>
                    <figcaption>Planetas</figcaption>
                </figure>
            </Link>
            <Link to="Universo" className="link">
                <figure>
                    <img src={Universo1} alt="universo" className="img-tamaño"/>
                    <figcaption>Universo</figcaption>
                </figure>
            </Link>
            <Link to="Valdio" className="link">
                <figure>
                    <img src={Valdio1} alt="valdio" className="img-tamaño"/>
                    <figcaption>valdio</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegacion
