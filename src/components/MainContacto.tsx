import '../styles.css';
import { FaFacebookF, FaLinkedinIn, FaPhone, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';

interface IdiomaProps {
    idioma: string;
}

function MainContacto ({ idioma } : IdiomaProps) {
    return (
        <main>
            <div className="banner__container">
                <div className="banner_center">
                    <h1>{ idioma == "es" ? "Contacto" : "Contact" }</h1>
                </div>
            </div>
            <div className="container__contactos">
                <div className='invisible__top' id="contacto" />
                <aside>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712100491/alpha/images/contacto_aside_wkuz1g.svg" alt="aside1" />
                </aside>
                <div className="info__contact">
                    <h1>{ idioma == "es" ? "Alpha Consultoría Estratégica" : "Alpha Strategic Consulting" }</h1>
                    <h3>{ idioma == "es" ? "Si tiene consultas específicas o requiere más información, le invitamos a ponerse en contacto con nosotros a través de nuestras redes sociales. Estamos a su disposición para atender sus inquietudes y proporcionarle la asistencia que necesite. Será un placer atenderle y brindarle el apoyo necesario" : "If you have specific questions or require more information, we invite you to contact us through our social networks. We are at your disposal to address your concerns and provide you with the assistance you need. It will be a pleasure to assist you and provide you with the necessary support" }</h3>
                    <h1>{ idioma == "es" ? "Teléfono principal" : "Main phone" }</h1>
                    <div>
                        <a href="tel:+51999999999"><i><FaPhone /></i>+51 999 999 999</a>
                    </div>
                    <h1>{ idioma == "es" ? "Nuestras Redes" : "Our Networks" }</h1>
                    <div className="social__list">
                        <a href="mailto:admintracion@alphaasesoriaestrategica.com"><i><IoMdMail /></i>Email</a>
                        <a href="https://twitter.com/"><i><FaXTwitter /></i>Twitter</a>
                        <a href="https://www.facebook.com/"><i><FaFacebookF /></i>Facebook</a>
                        <a href="https://www.linkedin.com/"><i><FaLinkedinIn /></i>LinkedIn</a>
                        <a href="#"><i><IoLogoWhatsapp /></i>WhatsApp</a>
                        <a href="https://www.tiktok.com/"><i><FaTiktok /></i>TikTok</a>
                    </div>
                </div>
            </div>
            <div className="container__trabaja">
                <div className='invisible__top' id="trabaja"/>
                <div className="info__trabaja">
                    <h3>{ idioma == "es" ? "Trabaja con nosotros" : "Join us" }</h3>
                    <h1>{ idioma == "es" ? "¡Creemos en tu potencial, experiencia y habilidades blandas!" : "We believe in your potential, experience and soft skills!" }</h1>
                    <p>{ idioma == "es" ? "Se parte de la institución líder del país en competitividad, con más de una década impulsando el desarrollo nacional, regional, provincial, distrital y comunal" : "Be part of the country's leading institution in competitiveness, with more than a decade promoting national, regional, provincial, district and communal development" }</p>
                    <div className="form-container">
                        <form>
                        <div className="input-group">
                            <div>
                                <label htmlFor="nombre">{ idioma == "es" ? "Nombre" : "First name" }</label>
                                <input type="text" id="nombre" name="nombre" placeholder={ idioma == "es" ? "Nombre" : "First name" } required />
                            </div>
                            <div>
                                <label htmlFor="apellido">{ idioma == "es" ? "Apellido" : "Last name" }</label>
                                <input type="text" id="apellido" name="apellido" placeholder={ idioma == "es" ? "Apellido" : "Last name" } required />
                            </div>
                        </div>
                        <div className="input-full">
                            <label htmlFor="email">{ idioma == "es" ? "Correo" : "Email" }</label>
                            <input type="email" id="email" name="email" placeholder={ idioma == "es" ? "Correo" : "Email" } required />
                        </div>
                        <button className="hero-btn" type="submit">{ idioma == "es" ? "Enviar" : "Submit" }</button>
                        </form>
                        <div className="message">
                            { idioma == "es" ? "No olvide adjuntar su CV en el correo*" : "Don't forget to attach your CV in the email*" }
                        </div>
                    </div>
                </div>
                <aside>
                    <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712100493/alpha/images/aside_trabajo_vyurtg.svg" alt="aside2" />
                </aside>
            </div>
        </main>
    )
}

export default MainContacto;