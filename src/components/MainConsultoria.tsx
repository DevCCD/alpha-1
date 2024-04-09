import '../styles.css';

interface IdiomaProps {
    idioma: string;
}

function MainConsultoria({ idioma } : IdiomaProps) {
    return(
        <>
            <main>
                <div className="banner__container">
                    <div className="banner_left">
                        <h1>{ idioma == "es" ? "Consultoría" : "Consultancy" }</h1>
                    </div>
                    <div className="banner_right">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922353/alpha/images/consultoria_m05zps.jpg" alt="Imagen Capacidades" />
                    </div>
                </div>
                <div className="display__title">
                    <div className='invisible__top' id='macro' />
                    <h2>Macro</h2>
                </div>
                <div className="container__macro">
                    <div className="grid__macro_1">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922070/alpha/images/macro1_iqavtp.jpg" alt="Talento" />
                        <div>
                            <p>{ idioma == "es" ? "Análisis, impactos, escenarios y proyecciones económicas" : "Analysis, impacts, scenarios and economic projections" }</p>
                        </div>
                    </div>
                    <div className="grid__macro_2">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922047/alpha/images/macro2_joytzd.jpg" alt="Riesgos" />
                        <div>
                            <p>{ idioma == "es" ? "Análisis de políticas fiscal, monetario y comercial y efectos sobre las organizaciones y países" : "Analysis of fiscal, monetary and commercial policies and effects on organizations and countries" }</p>
                        </div>
                    </div>
                    <div className="grid__macro_3">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922039/alpha/images/macro3_syp9pk.jpg" alt="Contactos" />
                        <div>
                            <p>{ idioma == "es" ? "Instrumentos innovadores fiscales" : "Innovative tax instruments" }</p>
                        </div>
                    </div>
                </div>
                <div className="display__title">
                    <div className='invisible__top' id="micro" />
                    <h2>Micro</h2>
                </div>
                <div className="container__macro">
                    <div className="grid__macro_1 grid__micro_1">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922073/alpha/images/micro1_i3wgrh.jpg" alt="Talento" />
                        <div>
                            <h1>{ idioma == "es" ? "Regulación y optimización de procesos" : "Regulation and optimization of processes" }</h1>
                            <p>{ idioma == "es" ? "La regulación y optimización de procesos se centra en establecer normativas y mejorar la eficiencia en las operaciones industriales y empresariales. Este enfoque busca garantizar el cumplimiento de estándares mientras se maximiza la productividad y se reducen los costos operativos" : "Process regulation and optimization focuses on establishing regulations and improving efficiency in industrial and business operations. This approach seeks to ensure compliance with standards while maximizing productivity and reducing operating costs" }</p>
                        </div>
                    </div>
                    <div className="grid__macro_2 grid__micro_2">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922042/alpha/images/micro2_ke1xf3.jpg" alt="Riesgos" />
                        <div>
                            <h1>{ idioma == "es" ? "Impactos, escenarios y proyecciones en industrias" : "Impacts, scenarios and projections in industries" }</h1>
                            <p>{ idioma == "es" ? "Evalúa las consecuencias, posibles situaciones futuras y previsiones en diversos sectores económicos, permitiendo una mejor toma de decisiones y planificación estratégica" : "Evaluates the consequences, possible future situations and forecasts in various economic sectors, allowing better decision making and strategic planning" }</p>
                        </div>
                    </div>
                    <div className="grid__macro_3 grid__micro_1">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1711922077/alpha/images/micro3_dxjqmq.jpg" alt="Contactos" />
                        <div>
                            <h1>{ idioma == "es" ? "Competitividad industrial" : "Industrial competitiveness"}</h1>
                            <p>{ idioma == "es" ? "Capacidad de las empresas y sectores productivos para generar bienes y servicios de alta calidad, a costos competitivos, para mantener y mejorar su posición en el mercado nacional e internacional" : "Capacity of companies and productive sectors to generate high quality goods and services, at competitive costs, to maintain and improve their position in the national and international market" }</p>
                        </div>
                    </div>
                </div>
                <div className="display__title">
                    <div className='invisible__top' id="estructuracion" />
                    <h2>{ idioma == "es" ? "Estructuración y financiamiento de proyectos" : "Project structuring and financing" }</h2>
                </div>
                <div className="container__estruc">
                    {/* <!-- izquierda --> */}
                    <div className="imagen__estruc">
                        <h1>{ idioma == "es" ? "Estructuración y gestión de activos" : "Structuring and asset management" }</h1>
                    </div>
                    {/* <!-- derecha --> */}
                    <div className="subcontainer__estruc">
                        <div>
                            <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712081994/alpha/images/estrucfin2_rjngvq.jpg" alt="" />
                            <p>{ idioma == "es" ? "Fondos, inversiones y transacciones de financiamiento de proyectos de infraestructura locales y transfronterizos" : "Funds, investments and financing transactions for local and cross-border infrastructure projects" }</p>
                        </div>

                        <p className="estruc__down">{ idioma == "es" ? "Conexiones con agencias de desarrollo internacionales y con conglomerados internacionales" : "Connections with international development agencies and international conglomerates" }</p>
                    </div>
                </div>
                <div className="display__title">
                    <div className='invisible__top'id="ifd" />
                    <h2>{ idioma == "es" ? "Instrumentos Financieros Derivados (IFD)" : "Derivative Financial Instruments (DFI)" }</h2>
                </div>
                <div className="container__capacidades container__instrumentos">
                    <div className="grid__capacidades_1">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712082771/alpha/images/ifd1_cn9uwl.jpg" alt="Analisis" />
                        <div>
                            <p>{ idioma == "es" ? "Análisis y recomendación de mejores estrategias para la organización" : "Analysis and recommendation of best strategies for the organization" }</p>
                        </div>
                    </div>
                    <div className="grid__capacidades_2">
                        <div>
                            <p>{ idioma == "es" ? "Impactos, escenarios y proyecciones IFD" : "Impacts, scenarios and projections DFI" }</p>
                        </div>
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712082769/alpha/images/ifd2_djkzcj.webp" alt="Proyeccciones" />
                    </div>
                    <div className="grid__capacidades_3">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712082999/alpha/images/ifd3_i0pfi9.jpg" alt="Tributación" />
                        <div>
                            <p>{ idioma == "es" ? "Tributación IFD" : "DFI Taxation" }</p>
                        </div>
                    </div>
                </div>
                <div className="display__title">
                                        <div className='invisible__top' id="peritajes" />
                    <h2>{ idioma == "es" ? "Peritaje Económico Financiero" : "Financial Economic Expertise" }</h2>
                </div>
                <div className="container__macro">
                    <div className="grid__macro_1">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712089909/alpha/images/tangible_kikozn.png" alt="Tangible" />
                        <div>
                            <p>{ idioma == "es" ? "Cuantificación y evaluación de tangibles e intangibles" : "Quantification and evaluation of tangibles and intangibles" }</p>
                        </div>
                    </div>
                    <div className="grid__macro_2">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712091505/alpha/images/manzano_ikvmp7.png" alt="Controversias" />
                        <div>
                            <p>{ idioma == "es" ? "Controversias y compensaciones" : "Controversies and compensations" }</p>
                        </div>
                    </div>
                    <div className="grid__macro_3">
                        <img src="https://res.cloudinary.com/ccdcloudy/image/upload/v1712090612/alpha/images/lucro_wlgf3p.jpg" alt="Lucro" />
                        <div>
                            <p>{ idioma == "es" ? "Daño emergente y lucro cesante" : "Consequential damages and lost profits" }</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainConsultoria;