<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cajon-b.color-secundario.p-3
      p(data-aos="fade-left") El proceso educativo implica una serie de fases estructuradas que permiten evaluar y medir el desempeño de los estudiantes en un tiempo determinado. Este componente formativo se enfoca en identificar y caracterizar el proceso educativo a través de la identificación de las necesidades formativas de la población, la estructuración de contenidos, la planificación y clasificación de recursos, y la selección del modelo educativo a seguir. Su propósito es asegurar que las estrategias de enseñanza, aprendizaje y evaluación sean efectivas, ajustadas a las características del grupo y a los objetivos establecidos por el docente. Para lograr esto, se emplean técnicas de evaluación diagnóstica, sumativa, cualitativa, cuantitativa y formativa que permiten un seguimiento detallado del progreso y la asimilación de los conocimientos. Los procesos de seguimiento y evaluación han evolucionado para convertirse en herramientas de acompañamiento y mejora continua, reflejando un cambio de paradigma en la educación hacia un enfoque más integral y adaptativo. 
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
