import React from 'react';
import "./about.css";

/* Images */
import Motivation from '../../Images/motivation.jpg';
import DietsEvents from '../../Images/taller-dietas.jpg';
import Training from '../../Images/training.jpg';

const about = () => {
    return (
        <section id="about" className="firstContent container-fluid">
            <div className="col-lg-12 headings">
                <h2>Quiénes somos</h2>
                <div id="app"></div>
                <hr className="underline" />
            </div>
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
                <a href="https://es.wikipedia.org/wiki/%C3%8Dndice_de_masa_corporal">IMC(Índice de Masa Corporal)</a></p>
            </div>
            <div className="row first-content-boxes">
                <div className="shadow-md col-sm-4">
                    <img
                        src={Motivation}
                        alt=""
                        width="100%" />

                    <p>Dietas 100% equilibradas</p>
                </div>
                <div className="col-sm-4"></div>
                <div className="shadow-lg">
                    <img
                        src={Training}
                        alt=""
                        width="100%" />

                    <p>Entrenamiento personalizado</p>
                </div>
                <div className="shadow-md col-sm-4">
                    <img
                        src={DietsEvents}
                        alt=""
                        width="100%" />

                    <p>Te ayudamos a motivarte</p>
                </div>
            </div>
        </section>
    );
}

export default about;