<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Estrategias metodológicas

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las estrategias metodológicas buscan crear un entorno de aprendizaje, en el que la diversidad de métodos aplicados facilite la comprensión y la asimilación de conceptos por parte de los estudiantes. El objetivo es no solo conocer y comprender los conceptos, sino también desarrollar habilidades de pensamiento crítico que permitan proponer soluciones a una variedad de problemas. Estas estrategias pueden incluir estudios de casos, sesiones de discusión, simulaciones y juegos de roles, fomentando una relación interactiva entre el profesor y los estudiantes.

    p(data-aos="fade-left") En el ámbito de las metodologías, es crucial distinguir entre dos enfoques principales: metodologías activas y metodologías pasivas.
      
    
    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Metodologías activas

    p.mb-4(data-aos="fade-left") Estas metodologías se centran en el estudiante y buscan desarrollar competencias específicas mediante un aprendizaje activo y participativo. En lugar de simplemente recibir información, los estudiantes construyen conocimiento a través de redes semánticas y conceptuales, resolviendo problemas y enfrentando situaciones reales. Las metodologías activas promueven el aprendizaje auto-dirigido y el desarrollo de habilidades meta-cognitivas, donde el estudiante puede reflexionar sobre su proceso de aprendizaje. Entre estas metodologías se encuentran:

    .row.justify-content-center.mb-4
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/2.svg' alt='AvatarTop')
          h4.text-center Estrategias cognitivas
          p Dirigidas al aprendizaje significativo mediante la comprensión profunda de los contenidos.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/3.svg' alt='AvatarTop')
          h4.text-center Estrategias metacognitivas
          p Fomentan la reflexión sobre el propio proceso de aprendizaje, incluyendo cómo se aprende, con qué se aprende y su relevancia social.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/4.svg' alt='AvatarTop')
          h4.text-center Estrategias lúdicas
          p Utilizan el juego y la interacción emocional para mejorar la motivación y el compromiso con el aprendizaje.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/5.svg' alt='AvatarTop')
          h4.text-center Estrategias tecnológicas
          p Incorporan el uso efectivo de herramientas tecnológicas avanzadas, como la inteligencia artificial y la realidad aumentada, para enriquecer el proceso educativo.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/6.svg' alt='AvatarTop')
          h4.text-center Estrategias socio-afectivas
          p Crean un ambiente de aprendizaje positivo y colaborativo, promoviendo el desarrollo socioemocional de los estudiantes.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/7.svg' alt='AvatarTop')
          h4.text-center Estrategias cognitivas
          p Dirigidas al aprendizaje significativo mediante la comprensión profunda de los contenidos.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/8.svg' alt='AvatarTop')
          h4.text-center Estrategias metacognitivas
          p Fomentan la reflexión sobre el propio proceso de aprendizaje, incluyendo cómo se aprende, con qué se aprende y su relevancia social.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/9.svg' alt='AvatarTop')
          h4.text-center Estrategias lúdicas
          p Utilizan el juego y la interacción emocional para mejorar la motivación y el compromiso con el aprendizaje.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/10.svg' alt='AvatarTop')
          h4.text-center Estrategias tecnológicas
          p Incorporan el uso efectivo de herramientas tecnológicas avanzadas, como la inteligencia artificial y la realidad aumentada, para enriquecer el proceso educativo.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/11.svg' alt='AvatarTop')
          h4.text-center Estrategias socio-afectivas
          p Crean un ambiente de aprendizaje positivo y colaborativo, promoviendo el desarrollo socioemocional de los estudiantes.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/12.svg' alt='AvatarTop')
          h4.text-center Estrategias tecnológicas
          p Incorporan el uso efectivo de herramientas tecnológicas avanzadas, como la inteligencia artificial y la realidad aumentada, para enriquecer el proceso educativo.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Metodologías pasivas

    p.mb-4(data-aos="fade-left") Estas metodologías están centradas en el docente y se caracterizan por un enfoque más tradicional y autoritario en el proceso de enseñanza. Los estudiantes tienen un papel más receptivo, limitándose a recibir la información proporcionada por el docente sin una participación activa en el proceso de aprendizaje. Entre las metodologías pasivas se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-8.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema6/13.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-4.p-lg-3.p-4.mb-4
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Enseñanza magistral
            p.text-white.text-center.mb-0 El docente presenta la información de manera estructurada y detallada, mientras los estudiantes toman notas y absorben el contenido sin un involucramiento activo.

      .col-lg-6.col-md-8.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema6/14.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-4.p-lg-3.p-4.mb-4
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Clases expositivas
            p.text-white.text-center.mb-0 Se enfoca en la transmisión unidireccional del conocimiento, con poca interacción o participación por parte de los estudiantes.
    
    //- .row.mb-5.justify-content-center
    //-   .col-sm-6.col-xl-5.mb-4.mb-xl-0.desktop
    //-     .tarjeta.tarjeta-slide.arriba.color2(@mouseover="indicadorTarjetaSlide = false")
    //-       .indicador--hover(v-if="indicadorTarjetaSlide")
    //-       .tarjeta-slide__contenedor.p-4
    //-         .tarjeta-slide__contenido.p-4.p-xl-5
    //-           h5 Enseñanza magistral
    //-           p El docente presenta la información de manera estructurada y detallada, mientras los estudiantes toman notas y absorben el contenido sin un involucramiento activo.
    //-         .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/13.png')})`}")
    //-   .col-sm-6.col-xl-5.mb-4.mb-xl-0.desktop
    //-     .tarjeta.tarjeta-slide.arriba.color2(@mouseover="indicadorTarjetaSlide = false")
    //-       .indicador--hover(v-if="indicadorTarjetaSlide")
    //-       .tarjeta-slide__contenedor.p-4
    //-         .tarjeta-slide__contenido.p-4.p-xl-5
    //-           h5 Clases expositivas
    //-           p Se enfoca en la transmisión unidireccional del conocimiento, con poca interacción o participación por parte de los estudiantes.
    //-         .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/14.png')})`}")

    //- .col.movil
    //-   .row.mb-5.justify-content-center
    //-     .col-sm-6.col-xl-3.mb-4-xl-0.col-12.p-4
    //-       .tarjeta.tarjeta-slide.arriba.color2(@mouseover="indicadorTarjetaSlide = false")
    //-         .indicador--hover(v-if="indicadorTarjetaSlide")
    //-         .tarjeta-slide__contenedor
    //-           .tarjeta-slide__contenido.p-4.p-xl-5
    //-             h5 Enseñanza magistral
    //-             p El docente presenta la información de manera estructurada y detallada, mientras los estudiantes toman notas y absorben el contenido sin un involucramiento activo.
    //-           .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/13.png')})`}")
    //-     .col-sm-6.col-xl-3.mb-4-xl-0.col-12.p-4
    //-       .tarjeta.tarjeta-slide.arriba.color2(@mouseover="indicadorTarjetaSlide = false")
    //-         .indicador--hover(v-if="indicadorTarjetaSlide")
    //-         .tarjeta-slide__contenedor
    //-           .tarjeta-slide__contenido.p-4.p-xl-5
    //-             h5 Clases expositivas
    //-             p Se enfoca en la transmisión unidireccional del conocimiento, con poca interacción o participación por parte de los estudiantes.
    //-           .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/14.png')})`}")
    
    p.mb-4(data-aos="fade-left") La elección entre metodologías activas y pasivas depende de los objetivos educativos y del contexto en el que se desarrolle el proceso de enseñanza-aprendizaje. Las metodologías activas favorecen un aprendizaje más profundo y significativo, mientras que las metodologías pasivas pueden ser útiles para la transmisión eficiente de grandes cantidades de información. A continuación, se resaltan las diferencias entre ambos enfoques:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span <i>Teorías de diferentes autores.</i>
    .tabla-a.clstabla.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Metodología pasiva 
            th Metodología activa
        tbody
          tr.text-center
            td Profesor enseña.
            td Todos aprenden y todos enseñan.
          tr.text-center(style="background-color: #F6F6F6")
            td El profesor es el centro de la educación.
            td Centro de la educación: el estudiante.
          tr.text-center
            td Transmitir conocimientos.
            td Generar conocimientos.
          tr.text-center(style="background-color: #F6F6F6")
            td Todo se da ya hecho al estudiante.
            td Creatividad.
          tr.text-center
            td Saber para tener una profesión.
            td Aprender a vivir.
          tr.text-center(style="background-color: #F6F6F6")
            td Quien sabe es el profesor.
            td El profesor sabe dónde saben más.
          tr.text-center
            td Educación para saber.
            td Educación para aprender a aprender.
          tr.text-center(style="background-color: #F6F6F6")
            td Educación para hacer cosas.
            td Educación para ser persona.
          tr.text-center
            td Sobresalir en la masa.
            td Educar líderes para la sociedad.
          tr.text-center(style="background-color: #F6F6F6")
            td Autoritarismo y mano dura.
            td Participación y motivación.
          tr.text-center
            td Educación para una etapa de la vida
            td Educación a lo largo de toda la vida.


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
