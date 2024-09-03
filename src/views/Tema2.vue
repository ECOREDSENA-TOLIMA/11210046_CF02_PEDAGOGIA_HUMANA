<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Ambientes de aprendizaje
    
    p.mb-4(data-aos="fade-left") El concepto de ambientes de aprendizaje abarca los diversos espacios donde se lleva a cabo la actividad docente, incluyendo ubicaciones físicas, virtuales, sociales y contextuales en los que los estudiantes adquieren conocimientos. A diferencia del término "aula", que tradicionalmente se asocia con un espacio físico específico equipado con escritorios, una pizarra y una disposición de filas, el concepto de ambiente de aprendizaje ofrece una visión más amplia y flexible. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los ambientes de aprendizaje no se limitan a la sala de clases; pueden incluir cualquier entorno que facilite el proceso educativo. Esto abarca desde aulas convencionales hasta laboratorios, sitios de práctica, espacios interactivos y plataformas virtuales. La organización del entorno educativo por parte de docentes y formadores también juega un papel crucial en la creación de un ambiente propicio para el aprendizaje. Esto puede incluir la disposición estratégica de los escritorios, la decoración con materiales educativos, y el uso de tecnologías digitales, audio e imágenes. 

    p.mb-4(data-aos="fade-left") A continuación, se presentan algunas características de los ambientes de aprendizaje.

    .row.justify-content-center(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-xl-4.col-6
              figure
                img(src='@/assets/curso/temas/tema2/2.svg', alt='Imagen decorativa')
            
          h4.text-center Enfoque innovador
          p Los enfoques innovadores, como el aprendizaje basado en proyectos o el aprendizaje colaborativo, también juegan un papel importante en la configuración de ambientes de aprendizaje efectivos, permitiendo una mayor interacción y participación de los estudiantes.
        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-4
            .col-xl-4.col-6
              figure
                img(src='@/assets/curso/temas/tema2/3.svg', alt='Imagen decorativa')
            
          h4.text-center Inclusividad y accesibilidad
          p Es fundamental que los ambientes de aprendizaje sean inclusivos y accesibles para todos los estudiantes, incluyendo aquellos con necesidades educativas especiales. La adaptabilidad del espacio y los recursos disponibles deben tener en cuenta estas necesidades para asegurar una educación equitativa.
        .col-xl.col-md-6.tarjeta.color-primario1.p-5
          .row.justify-content-center.mb-4
            .col-xl-4.col-6
              figure
                img(src='@/assets/curso/temas/tema2/4.svg', alt='Imagen decorativa')
            
          h4.text-center Evaluación periódica
          p Además, la evaluación periódica del ambiente de aprendizaje es esencial para garantizar su efectividad. Esto implica recoger retroalimentación de los estudiantes y docentes, así como realizar ajustes basados en esta información para mejorar continuamente el entorno educativo.
            

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
