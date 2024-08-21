<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Recursos educativos
    
    figure.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/tema1/1.svg', alt='Imagen decorativa')

    p(data-aos="fade-left") Los recursos educativos son los elementos esenciales utilizados en el aula para facilitar el proceso de enseñanza-aprendizaje-evaluación. Estos recursos pueden clasificarse en diferentes tipos, cada uno desempeñando un papel crucial en la mejora de la calidad educativa. A continuación, se detallan los principales tipos de recursos. 

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Recursos humanos
    
    .container.BGIMG02.px-4.px-md-5.pt-4
      .row.justify-content-center 
        .col-lg-10.col-12
          .row.justify-content-center 
            .col-lg-5.col-10.mb-3
              figure.mb-4(data-aos="fade-right")
               img(src='@/assets/curso/temas/tema1/2.svg', alt='Imagen decorativa')
            .col-lg-7.col-12.mb-3
              p(data-aos="fade-left") Los recursos humanos abarcan a los docentes, educadores, formadores e instructores responsables de dirigir y ejecutar el proceso educativo. Su papel es fundamental, ya que diseñan y aplican estrategias de enseñanza adaptadas a las necesidades de los estudiantes, buscando la mejor contextualización de los procesos de enseñanza-aprendizaje-evaluación. Además del conocimiento y experiencia en la materia, es esencial que el personal educativo posea formación en pedagogía para optimizar los resultados del proceso formativo.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Recursos financieros

    .container.BGIMG02.px-4.px-md-5.pt-4
      .row.justify-content-center 
        .col-lg-10.col-12
          .row.justify-content-center 
            .col-lg-7.col-12.mb-3
              p(data-aos="fade-left") Los recursos financieros comprenden el capital necesario para asegurar la continuidad y sostenibilidad de los programas educativos. Las instituciones educativas deben proyectar y gestionar estos recursos eficientemente, y en el proceso de solicitud de licencia, se requiere presentar presupuestos proyectados a cinco años como parte de los requisitos del Proyecto Educativo Institucional (PEI). Estos presupuestos permiten planificar y asegurar los recursos necesarios para mantener y mejorar la calidad educativa a lo largo del tiempo.
            .col-lg-5.col-10.mb-3
              figure.mb-4(data-aos="fade-right")
               img(src='@/assets/curso/temas/tema1/3.svg', alt='Imagen decorativa')
            
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Material didáctico
    
    p.mb-4(data-aos="fade-left") El material didáctico es un recurso esencial que apoya a los docentes en la mejora de los procesos de enseñanza-aprendizaje. Este tipo de material está diseñado para facilitar el aprendizaje de los estudiantes y debe cumplir con cuatro requisitos fundamentales:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="flip-up")
          .row(titulo="Finalidad o propósito claro")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 El material didáctico debe tener un propósito específico y definido dentro del proceso educativo. Debe contribuir a los objetivos de enseñanza y facilitar la comprensión de los conceptos por parte de los estudiantes.
          .row(titulo="Soporte físico")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Debe ser un recurso accesible que los estudiantes puedan consultar cuando lo necesiten. Esto puede incluir libros, folletos, fichas, y otros materiales tangibles que estén disponibles para el uso regular en el aula o en casa.
          .row(titulo="Contenido o información")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 El material debe contener información relevante y adecuada al nivel educativo de los estudiantes. Debe proporcionar contenidos que apoyen el aprendizaje y el desarrollo de habilidades según los objetivos educativos establecidos.
          .row(titulo="Pertinencia con los resultados de aprendizaje")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 El material didáctico debe estar alineado con los resultados de aprendizaje esperados. Su contenido y enfoque deben ser coherentes con los objetivos educativos y las competencias que se desean desarrollar en los estudiantes.
      .col-lg-4.col-10.mb-3.d-lg-flex.d-none
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/4.png', alt='Imagen decorativa')
    
    p(data-aos="fade-left") Además de los materiales físicos, hoy en día también se utilizan materiales digitales y tecnológicos. Estos últimos han transformado el proceso de enseñanza-aprendizaje al integrar múltiples recursos simultáneamente, como audio, texto e imágenes. Las tecnologías modernas facilitan la creación de comunidades de aprendizaje amplias y enriquecedoras, promoviendo una experiencia educativa más dinámica y significativa. 
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
