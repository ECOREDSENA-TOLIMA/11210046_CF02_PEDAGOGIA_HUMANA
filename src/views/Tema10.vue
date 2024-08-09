<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Planes de mejoramiento

    p.mb-4(data-aos="fade-left") Hoy en día, los resultados de la evaluación se utilizan como base para revisar y ajustar los métodos de formación, permitiendo a los estudiantes y a las instituciones abordar y mejorar las áreas identificadas en el proceso evaluativo inicial. Los planes de mejoramiento están diseñados para ofrecer a docentes e instituciones herramientas y estrategias para optimizar la calidad educativa y administrativa.
    p.mb-4(data-aos="fade-left") Estos planes suelen incluir:

    .row.justify-content-center(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema10/1.svg', alt='Imagen decorativa')
            
          h4.text-center Planificación estratégica
          p Involucra la formulación de acciones y objetivos a largo plazo para alcanzar metas específicas. Esta planificación estratégica asegura que las instituciones puedan guiar sus esfuerzos de manera coherente y efectiva.
        .col-md.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema10/2.svg', alt='Imagen decorativa')
            
          h4.text-center Programa de mejoramiento de la calidad académica
          p Este programa incluye procesos de acreditación y certificación que buscan asegurar y mejorar la calidad educativa. A través de este programa, las instituciones trabajan para cumplir con estándares reconocidos y mejorar su oferta académica.
        .col-md.tarjeta.color-primario1.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema10/3.svg', alt='Imagen decorativa')
            
          h4.text-center Proceso de mejora
          p Comprende una serie de actividades establecidas desde la planificación institucional que buscan implementar proyectos y directrices con el fin de alcanzar las metas propuestas. Este proceso es esencial para materializar los cambios necesarios y mejorar continuamente la calidad educativa.

    p(data-aos="fade-left") De acuerdo con la Ley General de Educación, las instituciones educativas deben incorporar un plan de mejoramiento dentro de su Proyecto Educativo Institucional, asegurando que los planes estén alineados con los objetivos educativos y las necesidades del entorno educativo.

</template>

<script>
export default {
  name: 'Tema3',
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
