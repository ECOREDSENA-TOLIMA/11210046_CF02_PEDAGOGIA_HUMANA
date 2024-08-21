<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 11
      h1 Técnicas de registro y sistematización
    
    p.mb-4(data-aos="fade-left") En el ámbito educativo, el registro y la sistematización de los avances de los estudiantes son cruciales para garantizar la continuidad y eficacia del proceso de aprendizaje. Estos procedimientos no solo cumplen una función administrativa, sino que son esenciales para documentar y seguir el progreso de los estudiantes. Los docentes deben capturar meticulosamente cada avance utilizando formatos adecuados, ya sean físicos o digitales, para asegurar una representación fiel del viaje educativo de cada estudiante.

    .row.justify-content-center.mb-4
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema11/1.png', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="flip-up")
          .row(titulo="¿Por qué es tan importante el registro?")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 El registro es fundamental para preservar la información sobre los avances de los estudiantes. En caso de que una institución educativa cierre, estos registros no se perderán, ya que deben ser entregados a las Secretarías de Educación para su almacenamiento conforme a normas de archivo. Esto asegura que la información se mantenga accesible y verificable en cualquier momento, incluso mucho después de su generación.
          .row(titulo="¿Cómo asegurar la evaluación de la calidad del proceso educativo?")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 La evaluación permite a los docentes valorar a los estudiantes bajo diversos criterios como el momento, la intensidad, la complejidad del contenido, el método y los instrumentos utilizados .Estos criterios garantizan una evaluación precisa y completa, proporcionando una imagen clara del progreso y las áreas que requieren atención adicional.
          .row(titulo="¿Qué papel juegan los planes de mejoramiento?")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Los planes de mejoramiento son cruciales en el proceso educativo, ya que ofrecen a los estudiantes oportunidades adicionales para reforzar y consolidar sus conocimientos. Actúan como una hoja de ruta, guiando a los estudiantes hacia nuevas oportunidades para mejorar y perfeccionar sus habilidades.
              Estos planes transforman la retroalimentación en acciones concretas, brindando a los estudiantes el apoyo necesario para alcanzar sus metas educativas.

    p.mb-4(data-aos="fade-left") Existen diversas técnicas para registrar y sistematizar el progreso educativo, cada una con sus propias características y ventajas. A continuación, se presentan algunas de las principales técnicas: 

    .tarjeta.tarjeta3.p-4.mb-4(data-aos="flip-up")
      SlyderB.p-4.mb-5(:datos="datosSlyder")

    .row.justify-content-center 
      .col-lg-10.col-12
        p(data-aos="fade-left") El registro y la sistematización no son solo procedimientos administrativos; son los cimientos del éxito educativo. Mantienen la integridad del proceso de aprendizaje y aseguran que cada estudiante tenga la oportunidad de sobresalir en su trayectoria educativa.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue

    datosSlyder: [
      {
        titulo: 'Registros narrativos',
        texto:
          'Descripciones detalladas del desempeño del estudiante que proporcionan un contexto rico y detallado, pero pueden ser subjetivas y requieren mucho tiempo para completarse.',
        imagen: require('@/assets/curso/temas/tema11/2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Listas de cotejo',
        texto:
          'Verificación de habilidades específicas utilizando una lista que permite una evaluación rápida y estructurada, aunque puede carecer de profundidad contextual.',
        imagen: require('@/assets/curso/temas/tema11/3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Rúbricas de evaluación',
        texto:
          'Son herramientas que definen criterios específicos con niveles de desempeño, facilitando una evaluación objetiva y consistente. Entre sus ventajas se encuentran la claridad y la uniformidad en la evaluación, mientras que sus desventajas incluyen el tiempo necesario para desarrollarlas y aplicarlas.',
        imagen: require('@/assets/curso/temas/tema11/4.png'),
      },
      {
        titulo: 'Portafolios',
        texto:
          'Colección de trabajos y reflexiones del estudiante que ofrece una visión integral del progreso, aunque la gestión y evaluación pueden ser complicadas.',
        imagen: require('@/assets/curso/temas/tema11/5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cuestionarios y encuestas',
        texto:
          'Obtención de datos cuantitativos a través de preguntas estructuradas que proporcionan resultados rápidos y estandarizados, pero limitan la profundidad de la información.',
        imagen: require('@/assets/curso/temas/tema11/6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diarios de aprendizaje',
        texto:
          'Reflexiones personales del estudiante sobre su aprendizaje que fomentan la autorreflexión, aunque son subjetivos y no siempre precisos.',
        imagen: require('@/assets/curso/temas/tema11/7.png'),
      },
      {
        titulo: 'Observación directa',
        texto:
          'Registro del desempeño en tiempo real que proporciona información inmediata y contextual, pero puede ser subjetivo y dependiente del observador.',
        imagen: require('@/assets/curso/temas/tema11/8.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Pruebas de desempeño',
        texto:
          'Evaluación práctica de habilidades en tareas reales que mide la aplicación práctica de conocimientos, aunque puede ser difícil de estandarizar y evaluar.',
        imagen: require('@/assets/curso/temas/tema11/9.png'),
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
