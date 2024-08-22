<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Estrategias para la formación
    
    figure.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/tema5/1.png', alt='Imagen decorativa')

    p(data-aos="fade-left") El diseño de estrategias de formación es crucial para adaptar la enseñanza a las necesidades específicas de los estudiantes y los objetivos del currículo. Las estrategias deben considerar el contexto educativo, el uso de recursos y la integración de tecnologías, promoviendo así un aprendizaje significativo y efectivo.
    
    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Estrategias centradas en el docente
    p(data-aos="fade-left") Estas estrategias destacan el papel activo del docente como facilitador del aprendizaje, utilizando métodos tradicionales y modernos adaptados a las necesidades del alumnado. Tales estrategias incluyen:

    .tarjeta.tarjeta3.p-4(data-aos="flip-up")
      SlyderB.p-4.mb-5(:datos="datosSlyder")

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Estrategias centradas en el estudiante

    p.mb-4(data-aos="fade-left") Fomentan la participación activa de los estudiantes en su proceso de aprendizaje, permitiéndoles construir sus propios métodos y reflexiones. Algunas de las principales estrategias incluyen:

    .row.justify-content-center 
      .col-lg-10.col-12.desktop(data-aos="flip-up")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/5.svg', alt='Imagen decorativa')

          .tarjeta.color-secundario.p-3(x="11.8%" y="34.8%" numero="+")
            p Utiliza situaciones problemáticas para que los estudiantes apliquen investigación, análisis y experimentación en su resolución.

          .tarjeta.color-secundario.p-3(x="31%" y="22.8%" numero="+")
            p Permite a los estudiantes asumir diferentes  perspectivas y modificar comportamientos para entender mejor los conceptos.

          .tarjeta.color-secundario.p-3(x="49.8%" y="11%" numero="+")
            p A través de preguntas, guía a los estudiantes a llegar a conclusiones sobre lo aprendido.

          .tarjeta.color-secundario.p-3(x="68.8%" y="22.8%" numero="+")
            p Complementa la labor docente mediante orientación y acompañamiento flexible y programado.

          .tarjeta.color-secundario.p-3(x="88.5%" y="34.8%" numero="+")
            p Los estudiantes descubren por si mismos los conceptos con la guía del docente.

      .col-12.movil
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/5_.svg', alt='Imagen decorativa')
    
    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Estrategias centradas en el proceso
    p.mb-4(data-aos="fade-left") Las estrategias centradas en el proceso se enfocan en asegurar un ciclo de enseñanza-aprendizaje-evaluación continuo y bien estructurado. Estas estrategias son cruciales para proporcionar un proceso educativo que sea coherente y eficaz, permitiendo a los estudiantes adquirir y aplicar conocimientos de manera integral. A continuación, se detallan algunas de las principales estrategias:

    .tarjeta.p-4.tarjeta--gris1.px-4.px-md-5.pt-4.mb-5
      PasosB.color-acento-botones
        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h6.mb-4 Simulación
            p.mb-0 Permite a los estudiantes asumir roles en escenarios que imitan problemas y situaciones del mundo real. Esta estrategia fomenta el aprendizaje experiencial al permitir que los estudiantes interactúen con problemas en un entorno controlado, desarrollando habilidades prácticas y aplicadas que son transferibles a situaciones reales. 
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/6.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h6.mb-4 Seminario investigativo
            p.mb-0 Requiere que los estudiantes realicen una investigación previa sobre un tema específico, seguido de un intercambio conceptual y discursivo durante el seminario. Este enfoque promueve una comprensión profunda del tema y facilita la discusión crítica y el análisis compartido entre los participantes.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/7.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h6.mb-4 Método de los 4 pasos
            p.mb-0 Un modelo práctico que estructura el proceso de enseñanza en cuatro fases interactivas: primero, el instructor demuestra y explica; luego, el estudiante repite lo aprendido mientras el instructor supervisa; después, el estudiante toma la iniciativa y realiza las tareas mientras el instructor observa; y finalmente, el estudiante ejecuta la tarea de forma independiente mientras el instructor ofrece apoyo y retroalimentación. Este método asegura un aprendizaje gradual y el desarrollo de la autonomía del estudiante. 
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/8.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h6.mb-4 Modelo didáctico operativo
            p.mb-0 Inspirado en las teorías constructivistas, este modelo integra experiencias vivenciales de los estudiantes y el análisis de documentos relacionados. El proceso incluye una etapa inicial de experiencias y reflexión, seguida de una ampliación y análisis en profundidad de la información, finalizando con la elaboración de conclusiones. Este enfoque busca una comprensión activa y personal del contenido.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/9.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h6.mb-4 Taller educativo
            p.mb-0 Combina la teoría y la práctica mediante la resolución de problemas específicos. Los talleres educativos permiten a los estudiantes aplicar conceptos teóricos a situaciones prácticas, promoviendo la integración de conocimientos y habilidades a través de actividades colaborativas y la experimentación.
        
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema5/10.png', alt='Imagen decorativa')

    separador
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Estrategias centradas en el conocimiento
    
    p.mb-4(data-aos="fade-left") Las estrategias centradas en el conocimiento están diseñadas para gestionar y optimizar la adquisición y aplicación de conocimientos específicos. Estas estrategias facilitan no solo la comprensión teórica, sino también la práctica y la integración de los conocimientos en contextos reales. A continuación, se presentan algunas de las estrategias clave:

    .row.justify-content-center(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-xl-4.col-6
              figure
                img(src='@/assets/curso/temas/tema5/11.svg', alt='Imagen decorativa')
            
          h4.text-center Enseñanza por explicación y contrastación de modelos
          p Utiliza métodos científicos para resolver problemas prácticos, permitiendo a los estudiantes comparar y contrastar diferentes enfoques y soluciones.
        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-4
            .col-xl-4.col-6
              figure
                img(src='@/assets/curso/temas/tema5/12.svg', alt='Imagen decorativa')
            
          h4.text-center Prácticas empresariales
          p Ofrecen a los estudiantes la oportunidad de aplicar los conocimientos adquiridos en un entorno real, permitiéndoles autoevaluar su competencia y adaptar sus habilidades a situaciones prácticas.
        .col-xl.col-md-6.tarjeta.color-primario1.p-5
          .row.justify-content-center.mb-4
            .col-xl-4.col-6
              figure
                img(src='@/assets/curso/temas/tema5/13.svg', alt='Imagen decorativa')
            
          h4.text-center Enseñanza para la comprensión
          p Basada en la teoría de las inteligencias múltiples de Howard Gardner, esta estrategia busca fomentar altos niveles de comprensión y aplicación del conocimiento, adaptando los métodos de enseñanza a las diversas capacidades y estilos de aprendizaje de los estudiantes.

      .row.justify-content-center.mb-4
        .col-lg-10.col-12(data-aos="flip-up")
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span <i>Teoría de las inteligencias múltiples de Gardner.</i>
          figure.desktop
            img(src='@/assets/curso/temas/tema5/14.svg', alt='En la figura 2 se presenta la teoría de las inteligencias múltiples de Howard Gardner, que incluye las siguientes inteligencias: musical, corporal, interpersonal, lingüística, matemática, naturalista, intrapersonal y visual.')
            figcaption Nota. Tomada de “Los 8 tipos de inteligencia de Gardner y cómo potenciarlas” (Editorial GEU).
          figure.movil
            img(src='@/assets/curso/temas/tema5/14_.svg', alt='En la figura 2 se presenta la teoría de las inteligencias múltiples de Howard Gardner, que incluye las siguientes inteligencias: musical, corporal, interpersonal, lingüística, matemática, naturalista, intrapersonal y visual.')
            figcaption Nota. Tomada de “Los 8 tipos de inteligencia de Gardner y cómo potenciarlas” (Editorial GEU).

    p(data-aos="fade-left") Es importante destacar la teoría de las inteligencias múltiples de Howard Gardner, la cual redefine el concepto de inteligencia al proponer que no existe una única forma de ser inteligente, sino múltiples tipos. Esta teoría sugiere que cada persona posee una combinación única de estas inteligencias y que la educación debe reconocer y apoyar esta diversidad para facilitar un aprendizaje más personalizado y efectivo. En esencia, la teoría destaca que el potencial humano es amplio y variado, y que el éxito no depende solo de habilidades académicas tradicionales, sino también de una variedad de capacidades.

    separador
    #t_5_5.titulo-segundo.color-acento-contenido
      h2 5.5 Estrategias de evaluación y seguimiento

    p.mb-4(data-aos="fade-left") Las estrategias de evaluación y seguimiento son fundamentales para medir el progreso de los estudiantes y ajustar las estrategias de enseñanza según sea necesario. Estas prácticas aseguran que el proceso educativo sea adaptativo y centrado en las necesidades del alumnado, facilitando así un aprendizaje continuo y eficaz. A continuación, se describen dos tipos principales de estrategias de evaluación:

    .row.justify-content-center.mb-4
      .col-12.mb-4
        .tarjeta-avatar-b(data-aos="flip-up")
          .tarjeta-avatar-b__img(style="max-width: 600px")
            img(src='@/assets/curso/temas/tema5/15.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h4 Evaluación formativa
              p.mb-4 Esta evaluación se lleva a cabo de manera continua a lo largo del proceso educativo. Su propósito principal es proporcionar retroalimentación constante tanto a los estudiantes como a los docentes sobre el progreso y las áreas de mejora. A través de tareas, cuestionarios, proyectos y actividades en clase, la evaluación formativa permite identificar fortalezas y debilidades, ajustando las estrategias de enseñanza en tiempo real para mejorar el aprendizaje. La retroalimentación obtenida ayuda a los estudiantes a comprender mejor los conceptos y a realizar ajustes necesarios en su proceso de aprendizaje.
      .col-12.mb-4
        .tarjeta-avatar-b(data-aos="flip-up")
          .tarjeta-avatar-b__img(style="max-width: 600px")
            img(src='@/assets/curso/temas/tema5/16.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h4 Evaluación sumativa
              p.mb-4 Esta evaluación se realiza al final de un curso o unidad para medir el rendimiento general del estudiante en relación con los objetivos de aprendizaje establecidos. Las evaluaciones sumativas, como exámenes finales, trabajos de curso y proyectos integradores, proporcionan una visión general del nivel de competencia alcanzado por el estudiante. A diferencia de la evaluación formativa, la sumativa se enfoca en valorar el resultado final del aprendizaje y es útil para la certificación o acreditación del conocimiento adquirido. Aunque no proporciona retroalimentación inmediata, los resultados pueden ser utilizados para evaluar la efectividad general del curso y para realizar ajustes en futuros programas de formación.

    p(data-aos="fade-left") Ambos tipos de evaluación juegan un papel crucial en el proceso educativo. Mientras que la evaluación formativa permite una mejora continua y adaptativa durante el curso, la evaluación sumativa ofrece una medida final del logro y el rendimiento del estudiante.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Clase magistral',
        texto:
          'Estrategia predominante donde el docente presenta la información y explica los conceptos clave de manera estructurada y detallada.',
        imagen: require('@/assets/curso/temas/tema5/2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Enseñanza expositiva',
        texto:
          'Busca que los estudiantes construyan su propio aprendizaje a través de un acercamiento progresivo a los conceptos científicos. ',
        imagen: require('@/assets/curso/temas/tema5/3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Explicaciones y demostraciones magistrales',
        texto:
          'Orientan la atención y facilitan la comprensión de conceptos complejos mediante la demostración práctica.',
        imagen: require('@/assets/curso/temas/tema5/4.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
