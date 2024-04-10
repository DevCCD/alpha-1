export interface Perfil {
    _id: string;
    nombre: string;
    cargo: string;
    descripcion: string;
    descripcionLarga: string;
    imageUrl: string;
    url: string;
}

const equipo: Perfil[] = [
    {
        "_id": "0",
        "nombre": "Luis Carranza",
        "cargo": "Director",
        "descripcion": "Doctor en Economía por la Universidad de Minnesota, Estados Unidos. Luis Carranza es director de Alpha Analítica y del Instituto de Gobierno y Gestión Pública de la Universidad de San Martín de Porres. Ha sido presidente ejecutivo de CAF, Ministro de Economía y Finanzas del Perú en dos oportunidades, viceministro de Hacienda y director del Banco Central de Reserva del Perú, jefe para América Latina y Mercados Emergentes del BBVA, consultor del BID, economista del FMI y asistente de investigación en la Reserva Federal de Minneapolis.",
        "descripcionLarga": "Luis Carranza es director de Alpha Analítica y se desempeña como Director del Instituto de Gobierno y Gestión Pública de la Universidad de San Martín de Porres. Entre los años 2017 y 2021 fue presidente ejecutivo del Banco de Desarrollo de América Latina (CAF), e impulsó la integración regional y el cierre de brechas en infraestructura. En el ámbito público, ha sido ministro de Economía y Finanzas del Perú en los periodos Julio 2006 – Julio 2008 y Enero – Diciembre 2009. También ha sido viceministro de Hacienda y director del Banco Central de Reserva del Perú. Asimismo, ha sido economista jefe para América Latina y Mercados Emergentes del Banco Bilbao Vizcaya Argentaria (BBVA) y consultor del Banco Interamericano de Desarrollo (BID) en temas de tributación, gasto público, reglas fiscales y crecimiento económico, trabajando para países como Guatemala, Panamá, Costa Rica, Honduras, El Salvador y Jamaica, República Dominicana, entre otros. Fue economista del Fondo Monetario Internacional (FMI) y asistente de investigación en la Reserva Federal de Minneapolis. En el ámbito de la infraestructura privada, creó el primer fondo de infraestructura de Perú, del cual fue presidente ejecutivo hasta 2017. Actualmente, el fondo se encuentra en período de desinversión. En el ámbito académico, ha sido profesor en la Universidad de Navarra de España y la Universidad San Martín de Porres del Perú. Es autor de publicaciones y trabajos de investigación sobre reglas fiscales, crecimiento, presupuesto público, mercados de créditos y política monetaria en economías dolarizadas. Doctor en Economía en la Universidad de Minnesota y economista de la Pontificia Universidad Católica del Perú.",
        "imageUrl": "https://res.cloudinary.com/ccdcloudy/image/upload/v1711922064/alpha/images/luis-carranza-profile_gxfus2.png",
        "url": "https://www.linkedin.com/"
    },
    {
        "_id": "1",
        "nombre": "Rudy Laguna",
        "cargo": "Corporativo Local",
        "descripcion": "Máster en tributación y política fiscal por la Universidad Autónoma de Madrid de España y la Universidad de Lima. Rudy Laguna es Director del Centro para la Competitividad y el Desarrollo. Ha sido director de Electro Sur Este, presidente del Comité Pro Conectividad de Proinversión, consultor del Ministerio de Economía y Finanzas y co-líder en proyectos de investigación en tributación y política fiscal para países de América Latina por el BID. Creador del Sistema de Administración del Desarrollo (SAD) y experiencia en la creación e implementación de mecanismos innovadores para la política fiscal.",
        "descripcionLarga":"Rudy Laguna es Director del Centro para la Competitividad y el Desarrollo (CCD). Ha sido director de Electro Sur Este y presidente del Comité Pro Conectividad (energía y telecomunicaciones) de Proinversión. Experiencia de 9 años en el Ministerio de Economía y Finanzas, en la Dirección de Asuntos Económicos y Sociales. Ha sido co-líder en proyectos de investigación en tributación y política fiscal para países de América Latina por el Banco Interamericano de Desarrollo (BID). Con más de 12 años de experiencia en competitividad y desarrollo de ámbitos nacional, regional, local y comunal, y de sectores económicos. Creador del Sistema de Administración del Desarrollo (SAD) y experiencia en la creación e implementación de mecanismos innovadores para la política fiscal. Es autor de publicaciones y trabajos de investigación sobre política fiscal, infraestructura, corredores económicos territoriales, competitividad y desarrollo del sector mineronergetico, entre otros. Docente en los cursos Economía Pública y Recursos Naturales en la Universidad de San Martín de Porres del Perú, y ha sido docente de Mercado y Regulación de Petróleo de la Maestría en Regulación en la Universidad Peruana de Ciencias Aplicadas (UPC) y Econometría I, II y Series de Tiempo en la Universidad Nacional de Ingeniería (UNI). Máster en  tributación y política fiscal por la Universidad Autónoma de Madrid y la Universidad de Lima. Ingeniero economista por la UNI.",
        "imageUrl": "https://res.cloudinary.com/ccdcloudy/image/upload/v1712284537/alpha/images/RUDY-LAGUNA_d61sn5.png",
        "url": "https://www.linkedin.com/"
    },
    {
        "_id": "2",
        "nombre": "Jorge Velarde",
        "cargo": "Financiamiento y jurídico corporativo",
        "descripcion": "Máster en leyes por Georgetown University Law Center, Estados Unidos. Jorge Velarde es un alto ejecutivo bancario y asesor legal con amplia experiencia en estructuración y gestión de activos en mercados latinoamericanos. Director de fondos e inversiones de impacto de CAF. Ha sido miembro de la junta de CAF-Asset Management Corporation (CAF-AM), encargada de manejar fondos de capital que coinvierten con CAF en transacciones de financiamiento de proyectos de infraestructura. Ha sido asesor legal y oficial de cumplimiento en Standard Chartered Bank y en el Banco Financiero del Perú.",
        "descripcionLarga": "Jorge Velarde es un alto ejecutivo bancario y asesor legal con amplia experiencia en la estructuración y gestión de diversas clases de activos en los mercados latinoamericanos. Cuenta con sólida experiencia en financiamiento corporativo y de proyectos transfronterizos, inversiones de capital privado, gestión estratégica, asesoría corporativa, ha liderado equipos orientados al desempeño y ha formado parte activamente de juntas directivas y comités gerenciales. Experiencia en promover desarrollo sostenible, integrar estándares Environmental, Social and Governance (ESG), movilizar capital privado y optimizar las operaciones comerciales. Jorge es director de fondos e inversiones de impacto del Banco de Desarrollo de América Latina (CAF). Ha sido miembro de la junta de CAF-Asset Management Corporation (CAF-AM), entidad gestora de fondos de CAF encargada de manejar fondos de capital de terceros que coinvierten con CAF en transacciones de financiamiento de proyectos de infraestructura, principalmente privada. Ha sido asociado en Chadbourne & Parke LLP y en Thacher Proffitt & Wood LLP. En el año 2004 y  2006 fue Asesor legal y oficial de cumplimiento en Standard Chartered Bank. Asimismo, ha sido asesor legal de Banco Financiero del Perú en el año 2003. Máster en leyes por Georgetown University Law Center. Máster en Administración de Empresas por la Universidad del Pacífico. Doctorado en leyes y licenciado en estudios generales en humanidades y artes por la Pontificia Universidad Católica del Perú.",
        "imageUrl": "https://res.cloudinary.com/ccdcloudy/image/upload/v1712279820/alpha/images/jorge-velarde-profile_jgo3so.png",
        "url": "https://www.linkedin.com/"
    },
    {
        "_id": "3",
        "nombre": "Miguel Marín",
        "cargo": "Corporativo Global",
        "descripcion": "Posgrado en economía avanzada y administración de empresas por el IESE Business School, University of Navarra, España. Miguel Marín es socio fundador y CEO de Análisis Económico Integral (AEI), consultoría estratégica con sede en Madrid (España) especializada en asuntos públicos y análisis económico, con más de 20 años en el ámbito público y privado europeo. Marín ha sido asesor en la Comisión Económica y de Asuntos Monetarios del Parlamento Europeo, tiene experiencia como asesor de grandes empresas del IBEX 35 y colaborador con principales think tanks y centros de estudios europeo, como el Instituto de Estudios Económicos, el Martens Centre y The European House Ambrosetti, entre otros.",
        "descripcionLarga":"Miguel Marín es socio fundador y CEO de Análisis Económico Integral (AEI), consultoría estratégica con sede en Madrid (España) especializada en asuntos públicos y análisis económico, con más de 20 años en el ámbito público y privado europeo. En el ámbito europeo ha sido asesor en la Comisión Económica y de Asuntos Monetarios del Parlamento Europeo, vocal asesor del Departamento de Economía del Gabinete del Presidente del Gobierno de España y director de la Asesoría Técnico-Jurídica del Grupo Parlamentario Popular en el Congreso de los Diputados. Ha sido socio director y consultor senior de ENEAS Sector Público, empresa dedicada al asesoramiento económico y financiero a instituciones públicas. Acreditada experiencia como asesor de grandes empresas del IBEX 35 y colaborador con principales think tanks y casas de estudios a nivel nacional europeo, como el Instituto de Estudios Económicos, el Martens Centre y The European House Ambrosetti, entre otros. En la Fundación para el Análisis y los Estudios Sociales (FAES) ha sido director de Economía y Políticas Públicas. En el ámbito de medios de comunicación, ha sido miembro del Consejo Editorial del periódico El Economista (2017-2019) y analista económico en el Programa 24h de RNE (2019- 2020). Posgrado en economía avanzada y administración de empresas por el IESE Business School, University of Navarra, España. Harvard Environmental Economics Program y Executive Program “Building Competitive Advantage in the Global Market” en Harvard. Licenciatura en Economía por la Universidad CEU San Pablo de Madrid.",
        "imageUrl": "https://res.cloudinary.com/ccdcloudy/image/upload/v1712273430/alpha/images/Miguel-Marin-Cd_mrwuyj.png",
        "url": "https://www.linkedin.com/"
    },
    {
        "_id": "4",
        "nombre": "Manuel Balmaseda",
        "cargo": "Corporativo Global",
        "descripcion": "Doctor en economía por la Universidad Northwestern, Estados Unidos. Manuel Balmaseda es director de Instituto Español de Banca y Finanzas, Founding Partner ARGIA GT&E, Past President of NABE. Ha sido economista jefe de CEMEX y, del BBVA, para España y Europa y para Mercados de Capital. Colabora con el FMI, la OCDE, la Secretaría General Sudamericana y otras organizaciones privadas en temas relacionados con las perspectivas económicas y la acción política en los Estados Unidos, la zona euro, América Latina y España, y en cuestiones relacionadas con el sector de la construcción, los mercados inmobiliarios y la evolución fiscal y monetaria.",
        "descripcionLarga":"Manuel Balmaseda es director de Instituto Español de Banca y Finanzas, Founding Partner ARGIA GT&E, Past President of NABE (National Association for Business Economics). Ha sido economista jefe de Cementos Mexicanos (CEMEX) y, del Banco Bilbao Vizcaya Argentaria (BBVA), para España y Europa y para Mercados de Capital. En el ámbito académico, ha sido profesor de economía en el Centro de Estudios Monetarios y Financieros (CEMFI), IESE Business School en Madrid, la EOI (Escuela de Organización Industrial) en Madrid y la Helsinki School of Economics. Asimismo, ha sido investigador visitante en el Banco de la Reserva Federal en Minneapolis. Colabora con el Fondo Monetario Internacional (FMI), la Comisión Europea, la Organización para la Cooperación y el Desarrollo Económicos (OCDE), la Secretaría General Sudamericana y otras organizaciones privadas en temas relacionados con las perspectivas económicas y la acción política en los Estados Unidos, la zona euro, América Latina y España, y en particular, cuestiones relacionadas con el sector de la construcción, los mercados inmobiliarios y la evolución fiscal y monetaria. Es miembro de organizaciones internacionales: el European Central Bank (ECB) Shadow Council, ICBE (International Conference of Business Economists), EMNET (Emerging Market Network), el Global Interdependence Council, NBEIC (National Business Economic Issues Council), la Junta de Directores de NABE (Asociación Nacional de Economía de la Empresa) en Estados Unidos y el Grupo de Expertos de Coyuntura en España, entre otras organizaciones económicas. Sus intereses profesionales actuales se centran en la evolución económica internacional, la construcción y la evolución del mercado inmobiliario, el impacto económico de la consolidación fiscal, la resolución de crisis y la reforma institucional y de mercado. Balmaseda participa en conferencias sobre estos y otros temas y ha publicado numerosos artículos en revistas académicas y libros y en la prensa. Doctor en economía por la Universidad Northwestern. Estudió Economía, Gobierno y Matemáticas-Informática en Colby College.",
        "imageUrl": "https://res.cloudinary.com/ccdcloudy/image/upload/v1712273545/alpha/images/Manuel-balmaseda_aputri.png",
        "url": "https://www.linkedin.com/"
    },
    {
        "_id": "5",
        "nombre": "Piero Calderón",
        "cargo": "Financiamiento y jurídico corporativo",
        "descripcion": "Máster en trading y gestión de carteras por el Instituto IBT de España. Máster en Dirección de Negocios por la Escuela de Organización Industrial (EOI) de España. Diplomas en finanzas corporativas, en trading, dirección de empresas por universidades peruanas y españolas. Ingeniero Mecánico de la Pontificia Universidad Católica del Perú. Actualmente se desempeña como Gerente General de empresa de trading de contratos de futuros realizando operaciones de trading en futuros de commodities y de índices bursátiles. Anteriormente ocupó varias jefaturas en áreas comerciales y técnicas de Ferreyros.",
        "descripcionLarga": "Máster en trading y gestión de carteras por el Instituto IBT de España. Máster en Dirección de Negocios por la Escuela de Organización Industrial  (EOI) de España. Diplomas en finanzas corporativas, en trading, dirección de empresas por universidades peruanas y españolas. Ingeniero Mecánico de la Pontificia Universidad Católica del Perú. Actualmente se desempeña como Gerente General de empresa de trading de contratos de futuros realizando operaciones de trading en futuros de commodities y de índices bursátiles. Anteriormente ocupó varias jefaturas en áreas comerciales y técnicas de Ferreyros.",
        "imageUrl": "https://res.cloudinary.com/ccdcloudy/image/upload/v1712273692/alpha/images/piero_c_ixgloe.png",
        "url": "https://www.linkedin.com/"
    },
    {
        "_id": "6",
        "nombre": "José Suarez-Lledó",
        "cargo": "Financiamiento y jurídico corporativo",
        "descripcion": "Doctorado en Economía por la Universidad de Pennsylvania. Maestría en Ciencias Económicas por la Universidad de Pennsylvania. Diplomas en Machine Learning para especialización en trading, gestión de inversiones con python y especialización en aprendizaje automático, curso de trading algorítmico y en ciencia de datos. Licenciado en Economía por la Universidad de Navarra. Actualmente se desempeña como cofundador de Bquant que es un programa único en formación en métodos cuantitativos para el análisis de mercado y el desarrollo de estrategias de inversión, utilizados en fondos y entidades financieras de primer nivel. Anteriormente fue director de Moody's Analiticsdel equipo de análisis económico y de crédito al consumo.",
        "descripcionLarga": "José Suarez-Lledó es cofundador de Bquant que es un programa único en formación en métodos cuantitativos para el análisis de mercado y el desarrollo de estrategias de inversión, utilizados en fondos y entidades financieras de primer nivel. En el ámbito financiero es asesor de fondos en Gestion Boutique VIII Global Gradient FI, que brinda asesoramiento del fondo de inversión Gestion Boutique VIII Global Gradient (AndBank Wealth Management y Myinvestor). En el ámbito académico es profesor adjunto de ESADE (Universidad privada en Barcelona) y de Universitat Pompeu Fabra - Barcelona impartiendo clases de gestión de activos y de riesgos en bancos, así como tendencias de inversión y estrategias cuantitativas gestión de carteras. Acreditada experiencia como consultor financiero independiente siendo socio fundador de Geometría Quant, que asesora fondos de inversión y otras instituciones financieras, especializándose en análisis cuantitativo y estrategias de inversión para mercados financieros. Ha sido gerente de CaixaBank, así como director de Moody's Analitics del equipo de análisis económico y de crédito al consumo. Doctorado en Economía por la Universidad de Pennsylvania. Maestría en Ciencias Económicas por la Universidad de Pennsylvania. Diplomas en Machine Learning para especialización en trading, gestión de inversiones con python y especialización en aprendizaje automático, curso de trading algorítmico y en ciencia de datos. Licenciado en Economía por la Universidad de Navarra.",
        "imageUrl": "https://res.cloudinary.com/ccdcloudy/image/upload/v1712273789/alpha/images/jose_suarez_oyqg4n.png",
        "url": "https://www.linkedin.com/"
    },
    {
        "_id": "7",
        "nombre": "José Enrique Galdón",
        "cargo": "Corporativo Global",
        "descripcion": "José Enrique Galdón es Doctor en Economía Aplicada por la Universidad de Minnesota (Minneapolis, USA, 1995). Fue estudiante de posdoctorado en la London School of Economics and Political Science. Además, cuenta con un Master en Economía por la Universidad de Minnesota (1993) y un MBA por la Universidad de St. Thomas (Minneapolis, USA, 1995). Ha sido miembro visitante en la Universidad de Princeton, el Centro para el Desempeño Económico (LSE), UC Santa Cruz, la Escuela de Negocios Johns Hopkins Carey y el Departamento de Investigación del Banco de la Reserva Federal de Minneapolis, entre otros. Actualmente es profesor de Economía en la Universidad Pública de Navarra (Pamplona, ​​España) desde 2007, investigador de IZA (Instituto de Economía del Trabajo) desde 2003 e investigador de la Organización Mundial del Trabajo desde 2017.",
        "descripcionLarga": "José E. Galdón-Sánchez es profesor de Economía en la Universidad Pública de Navarra (Pamplona, ​​España) desde 2007, investigador de IZA desde 2003 e investigador de la Organización Mundial del Trabajo desde 2017. El profesor Galdón recibió un doctorado en Economía Aplicada de la Universidad de Minnesota y fue estudiante de posdoctorado en la London School of Economics and Political Science. Ha sido miembro visitante en la Universidad de Princeton, el Centro para el Desempeño Económico (LSE), UC Santa Cruz, la Escuela de Negocios Johns Hopkins Carey y el Departamento de Investigación del Banco de la Reserva Federal de Minneapolis, entre otros. Sus intereses de investigación se centran en la macroeconomía teórica y empírica, la organización industrial y la economía laboral. Ha realizado investigaciones sobre el impacto de la flexibilidad del mercado laboral en el empleo y los flujos de trabajo, y en la intermediación financiera y el desarrollo económico. Sus investigaciones han sido publicadas en revistas como American Economic Review, Journal of the European Economic Association, Journal of Development Economics o European Economic Review.",
        "imageUrl": "https://res.cloudinary.com/ccdcloudy/image/upload/v1712273869/alpha/images/jose_galdon_tcgbj4.png",
        "url": "https://www.linkedin.com/"
    }
]

export default equipo