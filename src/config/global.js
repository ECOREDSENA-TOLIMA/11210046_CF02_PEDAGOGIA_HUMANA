export default {
  global: {
    componenteFormativo: 'Ejecución y evaluación del plan de formación',
    descripcionCurso:
      'Este componente abarca recursos educativos, financieros y el recurso humano involucrado. Explora ambientes de aprendizaje, programas de formación y medios educativos. Describe estrategias formativas y metodológicas, tanto activas como pasivas, además de técnicas e instrumentos de evaluación, tipos de evaluación, planes de mejoramiento y técnicas de registro y sistematización de información educativa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Recursos educativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Recursos humanos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Recursos financieros',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Material didáctico',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ambientes de aprendizaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Programas de formación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Clasificación de medios utilizados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Recursos didácticos y educativos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tecnologías de la Información y la Comunicación (TIC)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Materiales didácticos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Recursos multimedia y tecnologías emergentes',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Ambientes de aprendizaje digitales y físicos',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estrategias para la formación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estrategias centradas en el docente',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estrategias centradas en el estudiante',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estrategias centradas en el proceso',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Estrategias centradas en el conocimiento',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Estrategias de evaluación y seguimiento',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estrategias metodológicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Metodologías activas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Metodologías pasivas',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Material educativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Material dentro del aula o ambiente de formación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Materiales fuera del aula',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Técnicas e instrumentos de evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Técnicas de observación',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Técnicas de resolución de problemas',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Técnicas de cuestionario',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Técnicas de solicitud de productos',
            hash: 't_8_4',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Evaluación de los aprendices',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Tipos de evaluación',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Características de la evaluación',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Proceso evaluativo',
            hash: 't_9_3',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Planes de mejoramiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Técnicas de registro y sistematización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3. Programas de formación',
      referencia: 'Ministerio de Educación Nacional. (s.f.). Normograma.',
      tipo: 'Página web',
      link: 'https://www.mineducacion.gov.co/portal/Normatividad/',
    },
    {
      tema: '4. Clasificación de medios utilizados',
      referencia:
        '¿Cómo elaboramos una guía de aprendizaje? Ecosistema de Recursos Educativos Digitales SENA [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gxiuDA8e02s&t=3s',
    },
  ],
  glosario: [
    {
      termino: 'E-learning (aprendizaje electrónico',
      significado:
        'se refiere a la educación y formación proporcionada a través de medios electrónicos, principalmente a través de Internet. Este tipo de aprendizaje permite a los estudiantes acceder a material educativo y realizar actividades desde cualquier lugar y en cualquier momento, ofreciendo flexibilidad y eliminando barreras geográficas. Las plataformas populares de e-learning, como Moodle, Google Classroom y Blackboard, permiten a los educadores y estudiantes interactuar y compartir información de manera eficiente y accesible.',
    },
    {
      termino: 'Estrategia',
      significado:
        'plan o enfoque diseñado para alcanzar objetivos específicos en el proceso de enseñanza-aprendizaje, guiando la implementación de métodos y recursos educativos.',
    },
    {
      termino: 'Evaluación',
      significado:
        'proceso sistemático de recolección, análisis e interpretación de datos sobre el rendimiento y progreso de los estudiantes para tomar decisiones informadas sobre su aprendizaje y desarrollo.',
    },
    {
      termino: 'Instrumentos de evaluación',
      significado:
        'herramientas y técnicas utilizadas para medir el rendimiento de los estudiantes, tales como exámenes, cuestionarios, rúbricas y observaciones.',
    },
    {
      termino: 'Material didáctico',
      significado:
        'recursos y materiales utilizados para apoyar y facilitar el proceso de enseñanza, como libros, guías, y recursos multimedia.',
    },
    {
      termino: 'Mejoramiento',
      significado:
        'proceso de realizar ajustes y mejoras en el plan de formación basado en los resultados de la evaluación para optimizar la calidad educativa y el desempeño de los estudiantes.',
    },
    {
      termino: 'Metodología',
      significado:
        'conjunto de métodos y técnicas utilizados en el proceso de enseñanza para facilitar el aprendizaje, basándose en enfoques teóricos y prácticos.',
    },
    {
      termino: 'Proceso',
      significado:
        'serie de pasos o fases a seguir en la ejecución de un plan de formación, desde la planificación hasta la evaluación y ajuste de estrategias.',
    },
    {
      termino: 'Recursos humanos',
      significado:
        'personas involucradas en el proceso educativo, incluyendo docentes, administradores y otros profesionales que contribuyen a la implementación y ejecución del plan de formación.',
    },
    {
      termino: 'Registro',
      significado:
        'documentación sistemática y precisa de los avances y desempeños de los estudiantes durante el proceso educativo, utilizada para hacer seguimiento y tomar decisiones.',
    },
    {
      termino: 'Sistematización',
      significado:
        'organización y estructuración de la información y datos educativos de manera ordenada para facilitar su análisis, acceso y uso efectivo en la toma de decisiones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Editorial GEU. (2022). Los 8 tipos de inteligencia de Gardner y cómo potenciarlas. Howard Gardner.',
      link:
        'https://www.editorialgeu.com/blog/los-8-tipos-de-inteligencia-de-gardner-y-como-potenciarlos/',
    },
    {
      referencia:
        'Krüger, K. (2006). El concepto de sociedad del conocimiento. Revista bibliográfica de geografía y ciencias sociales, 683.',
    },
    {
      referencia: 'Mindomo. (s.f.). El método demostrativo: los 4 pasos.',
      link:
        'https://www.mindomo.com/es/mindmap/el-metodo-demostrativo-los-4-pasos-269adfc4f9bd4d1a8e47ae619a1d3ba7',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (1994). Ley General de Educación, Ley 115 de febrero 8 de 1994.',
      link:
        'https://www.mineducacion.gov.co/1621/articles-85906_archivo_pdf.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Normograma: Decreto 1075 de 2015.',
      link: 'https://www.mineducacion.gov.co/portal/Normatividad/',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2017). Programas de formación.',
      link: 'http://www.mineducacion.gov.co/1759/w3-article-234968.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Proyecto educativo institucional (PEI).',
      link: 'https://www.mineducacion.gov.co/1621/article-79361.html',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (MINTIC). (s.f.). E-Learning (aprendizaje electrónico).',
      link:
        'https://www.mintic.gov.co/portal/inicio/Glosario/E/5601:E-Learning-aprendizaje-electronico',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (MINTIC). (s.f.). Tecnologías de la información y las comunicaciones (TIC).',
      link:
        'https://mintic.gov.co/portal/inicio/Glosario/T/5755:Tecnologias-de-la-Informacion-y-las-Comunicaciones-TIC#:~:text=Las%20Tecnolog%C3%ADas%20de%20la%20Informaci%C3%B3n,%2C%20video%20e%20im%C3%A1genes%20(Art.',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO). (s.f.). Inicio.',
      link: 'https://www.iso.org/es/home',
    },
    {
      referencia:
        'Romero, R. (s.f.). La evaluación en el proceso de enseñanza-aprendizaje.',
      link: 'http://tecnologiaedu.us.es/rromero/pdf/present8.pdf',
    },
    {
      referencia: 'Universidad de Cundinamarca (UDEC). (s.f.). Evaluación.',
      link:
        'http://www.udec.edu.mx/portal/docs/DIDACTICA/INSTRUMENTOS%20DE%20EVALUACION.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Nombre_rol',
          centro: 'Nombre_centro_formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
