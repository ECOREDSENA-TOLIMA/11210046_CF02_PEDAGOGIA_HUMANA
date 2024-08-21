<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Programas de formación
    
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center 
          .col-lg-6.col-10
            .cajon.color-secundario.p-4.mb-4(style="background-color: #FFF8E7")(data-aos="flip-up")
              p Los programas de formación están diseñados para proporcionar a los individuos los conocimientos y habilidades necesarios para cumplir con las demandas del sector productivo o educativo. Estos programas abarcan tanto la cualificación laboral como la formación académica, y se adaptan a las necesidades y objetivos específicos de cada ámbito.
          .col-lg-6.col-12
            figure
              img(src='@/assets/curso/temas/tema3/1.png', alt='Imagen decorativa')
    
    p.mb-4(data-aos="fade-left") De acuerdo con el Decreto 1075 de 2015, artículo 2.6.4.1, los tipos de programas de formación en la Educación para el Trabajo y el Desarrollo Humano son: 

    .row.justify-content-center.mb-5
      .col-12.mb-4
        .tarjeta-avatar-b(data-aos="flip-up")
          .tarjeta-avatar-b__img(style="max-width: 600px")
            img(src='@/assets/curso/temas/tema3/2.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h4 Programas de Formación Laboral
              p.mb-4 Objetivo: preparar a las personas en áreas específicas del sector productivo y desarrollar competencias laborales relacionadas con las áreas de desempeño de la Clasificación Nacional de Ocupaciones. Estos programas están destinados a capacitar a los individuos para ejercer actividades productivas, ya sea de forma independiente o dependiente.
              p Duración y prácticas: deben tener una duración mínima de 600 horas, de las cuales al menos el 50 % debe dedicarse a formación práctica.
      .col-12.mb-4
        .tarjeta-avatar-b(data-aos="flip-up")
          .tarjeta-avatar-b__img(style="max-width: 600px")
            img(src='@/assets/curso/temas/tema3/3.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h4 Programas de Formación Académica
              p.mb-4 Objetivo: proporcionar conocimientos y habilidades en ciencias, matemáticas, tecnología, humanidades, arte, idiomas, recreación, deporte, y otras áreas. También preparan a los estudiantes para validar niveles y grados de la educación formal básica y media, y fomentan la autogestión, participación democrática, y organización comunitaria e institucional. 
              p Duración: los programas deben tener una duración mínima de 160 horas.

      p.mb-4(data-aos="fade-left") Para desarrollar un programa de formación eficaz, es esencial considerar diversos aspectos que aseguren la calidad y pertinencia del proceso educativo. Estos aspectos incluyen:

      .row.justify-content-center.mb-4
        .col-lg-10.col-12(data-aos="flip-up")
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span <i>Aspectos para desarrollar un programa de formación.</i>
          figure.desktop
            img(src='@/assets/curso/temas/tema3/4.svg', alt='En la Figura 1 se presentan los aspectos clave a considerar para desarrollar un plan de formación, que abarcan la temática, la estructura curricular, los contenidos de estudio y las actividades de aprendizaje.')
          figure.movil
            img(src='@/assets/curso/temas/tema3/4_.svg', alt='En la Figura 1 se presentan los aspectos clave a considerar para desarrollar un plan de formación, que abarcan la temática, la estructura curricular, los contenidos de estudio y las actividades de aprendizaje.')
      
      p(data-aos="fade-left") Dado el impacto significativo de las Tecnologías de la Información y la Comunicación (TIC) en la educación, es crucial incorporar estrategias didácticas que utilicen recursos TIC. La integración de estas tecnologías facilita la creación de ambientes de aprendizaje modernos, alineados con las transformaciones sociales y tecnológicas actuales, y promueve una formación que responde a las exigencias de una sociedad cada vez más tecnológica (Krüger, 2006).

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
