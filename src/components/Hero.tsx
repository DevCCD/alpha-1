import '../styles.css';

import globe from '../assets/hero.svg'
import { Link } from 'react-router-dom';

interface IdiomaProps {
    idioma: string;
}

const Hero = ({ idioma } : IdiomaProps) => {
    return (
        <>
            <main>
                <div className="hero-container">
                    <img 
                        src={globe}
                    />
                    <div className="hero-text">
                        <h1>Alpha</h1>
                        <h4>
                            {idioma == "es" ? "Asesoría Estratégica" : "Strategic Consulting"}
                        </h4>
                        <p>{ idioma == "es" ? "Generación de confianza y alta capacidad de análisis" : "Generation of trust and high capacity for analysis"}</p>
                        <Link to={"/#contactar"}>
                            <button className="hero-btn">{idioma == "es" ? "Escríbenos" : "Contact us"}</button>
                        </Link>
                    </div>
                </div>
            </main>
            <section>
                <Link to={"/#contactar"} className='container__portada'>
                    <div className="left__portada">
                        <div className="logo__portada">
                            <img src="/favicon.svg" alt="Logo Alpha" />
                            <h1>ALPHA</h1>
                            <h4>
                                {idioma == "es" ? "asesoría estratégica" : "strategic consulting"}
                            </h4>
                        </div>
                        <h2>
                            {idioma == "es" ? "Crecimiento económico: global moderado y local bajo" : "Economic growth: moderate global and low local"}
                        </h2>
                        <p>Informe Abril 2023</p>
                    </div>
                    <div className="right__portada">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/f_auto,q_auto/v1/alpha/images/hero/earth" alt="Earth" />
                    </div>
                </Link>
                <div className="container">
                    <h1 className="display">{idioma=="es" ? "Tasa de Referencia Real" :  "Real Reference Rate" }</h1>
                    <p>{idioma == "es" ? "¿Cómo impacta actualmente y en perspectiva a la empresa y a tus inversiones personales?" : "How does it currently and in perspective impact the company and your personal investments?"}</p>
                    <Link to={"/#contactar"}>
                        <button className="section-btn">{idioma == "es" ? "Escríbenos" : "Contact us" }</button>
                    </Link>
                    <img src={idioma == "es" ? "https://res.cloudinary.com/ccdcloudy/image/upload/v1712783131/alpha/images/Graficos%20Observatorio/TasaInteresReal.png" : "https://res.cloudinary.com/ccdcloudy/image/upload/v1712783131/alpha/images/Graficos%20Observatorio/TasaInteresReal.png"} />
                </div>
            </section>
        </>
    );
};

export default Hero;