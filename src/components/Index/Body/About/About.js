import React, { Component } from 'react';

import "./About.css";

export default class About extends Component {
    render() {
        return (
            <section id="about" className="firstContent">
                <div className="container">
                    <h2>Quiénes somos</h2>
                    <div id="app"></div>
                    <div id="first">
                        <p>Tener un peso saludable o ideal no es producto
                        de dejar de comer cuando se tiene algunos kilos extra,
                        sino más bien es consecuencia de modificar el estilo
                        de vida y los malos hábitos que generan ese exceso de
                        calorías y poco gasto calórico. Es entonces cuando
                        se requiere tener un programa o plan para bajar de peso.</p>

                        <p><b>FeelGood</b> es un programa online de nutrición y ejercicio
                        personalizado que te ayudará a adelgazar en poco tiempo sin necesidad
                        de ir a consultas privadas y/o gimnasios</p>

                        <p>Al introducir tus datos, nuestros profesionales valorarán
                        qué dietas y entrenamientos se adecuarán mas a tu complexión física
                        teniendo en cuenta la edad, el peso, la altura y el
                        <a href="https://es.wikipedia.org/wiki/%C3%8Dndice_de_masa_corporal"> IMC (Índice de Masa Corporal)</a></p>
                    </div>
                </div>
                <div className="first-content-boxes">
                    <div className="shadow-md col-sm-3">
                        <img
                        className="image"
                            src="img/motivation.jpg"
                            alt=""
                            width="100%" />

                        <p className="texto">Resultados garantizados</p>
                    </div>
                    <div className="shadow-md col-sm-3">
                        <img
                        className="image"
                            src="img/taller-dietas.1.jpg"
                            alt=""
                            width="100%" />

                        <p className="texto">Entrenamiento personalizado</p>
                    </div>
                    <div className="shadow-md col-sm-3">
                        <img
                        className="image"
                            src="img/training.jpg"
                            alt=""
                            width="100%" />

                        <p className="texto">Te ayudamos a motivarte</p>
                    </div>
                </div>
            </section>
        );
    }
}