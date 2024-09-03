<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Técnicas e instrumentos de evaluación
    
    p.mb-4(data-aos="fade-left") Las técnicas e instrumentos de evaluación son conceptos íntimamente relacionados. Las técnicas de evaluación son métodos que permiten medir el nivel de apropiación de conocimientos y el desarrollo de habilidades por parte de los estudiantes durante el proceso de aprendizaje. A su vez, los instrumentos de evaluación son las herramientas específicas utilizadas para aplicar estas técnicas.

    .row.justify-content-center 
      .col-lg-10.col-12
        .row.justify-content-center 
          .col-lg-6.col-10.mb-3
            figure.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema8/1.png', alt='Imagen decorativa')
          .col-lg-6.col-12.mb-3
            .cajon.color-secundario.p-4.mb-4(style="background-color: #FFF8E7")(data-aos="flip-up")
              p En este contexto, la evaluación alternativa surge como una tendencia innovadora frente a la evaluación sistemática tradicional. La evaluación alternativa se distingue por el uso de técnicas e instrumentos que integran los contextos de enseñanza en la realidad cotidiana del aula. Su objetivo es recopilar evidencia detallada sobre cómo los estudiantes procesan y aplican los conocimientos adquiridos para resolver problemas en situaciones reales.
            p Este modelo de evaluación no solo está relacionado con los estilos de aprendizaje, sino que también abarca el desarrollo de capacidades lingüísticas, científicas, culturales y educativas. Permite contextualizar el aprendizaje del aula con el mundo real, favoreciendo una comprensión más amplia y aplicada de los conocimientos.
    
    separador
    #t_8_1.titulo-segundo.color-acento-contenido
      h2 8.1 Técnicas de observación
    p.mb-5(data-aos="fade-left") Las técnicas de observación implican un sistema de percepción planificada y sistemática para evaluar los conocimientos y habilidades de los estudiantes en contextos reales. Estas técnicas permiten evaluar cómo los estudiantes aplican sus conocimientos y habilidades en situaciones cotidianas. Para realizar una observación efectiva, es fundamental definir claramente los aspectos a evaluar y establecer un tiempo adecuado para la observación. Los principales tipos de observación son:

    .titulo.mb-5
      img(src='@/assets/curso/temas/ico.png', alt='Imagen decorativa')
      h5.mb-0 a. Observación directa

    p.mb-4(data-aos="fade-left") En este enfoque, el evaluador interactúa directamente con el estudiante o candidato durante el proceso de evaluación. Esta observación puede ser:

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema8/2.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-6.p-lg-3.p-sm-4.px-3
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Estructurada
            p.text-white.text-center.mb-0 Donde se prepara al estudiante con antelación y se utilizan criterios y herramientas específicos, como listas de cotejo o rúbricas, para registrar y evaluar el desempeño.

      .col-lg-6.col-md-12.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema8/3.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-6.p-lg-3.p-sm-4.px-3
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Espontánea
            p.text-white.text-center.mb-0 Define la filosofía, los métodos y las estrategias que se utilizarán para facilitar el aprendizaje. Es el marco teórico que orienta la práctica educativa y determina cómo se llevará a cabo la transferencia de conocimientos.

    //- .row.justify-content-center.mb-5
    //-   .col-sm-6.col-xl-5.mb-4.mb-xl-0.desktop
    //-     .tarjeta.tarjeta-slide.arriba.color2(@mouseover="indicadorTarjetaSlide = false")
    //-       .indicador--hover(v-if="indicadorTarjetaSlide")
    //-       .tarjeta-slide__contenedor.p-4
    //-         .tarjeta-slide__contenido.p-4.p-xl-5
    //-           h5 Estructurada
    //-           p Donde el evaluador observa el desempeño del estudiante de manera natural, sin preparación previa. Se pueden usar listas de verificación o formularios de observación para registrar los comportamientos y habilidades observadas.
    //-         .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/2.png')})`}")
    //-   .col-sm-6.col-xl-5.mb-4.mb-xl-0.desktop
    //-     .tarjeta.tarjeta-slide.arriba.color2(@mouseover="indicadorTarjetaSlide = false")
    //-       .indicador--hover(v-if="indicadorTarjetaSlide")
    //-       .tarjeta-slide__contenedor.p-4
    //-         .tarjeta-slide__contenido.p-4.p-xl-5
    //-           h5 Espontánea
    //-           p Donde el evaluador observa el desempeño del estudiante de manera natural, sin preparación previa. Se pueden usar listas de verificación o formularios de observación para registrar los comportamientos y habilidades observadas.
    //-         .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/3.png')})`}")

    //- .col.movil
    //-   .row.mb-5.justify-content-center
    //-     .col-sm-6.col-xl-3.mb-4-xl-0.col-12.p-2
    //-       .tarjeta.tarjeta-slide.arriba.color2(@mouseover="indicadorTarjetaSlide = false")
    //-         .indicador--hover(v-if="indicadorTarjetaSlide")
    //-         .tarjeta-slide__contenedor
    //-           .tarjeta-slide__contenido.p-4.p-xl-5
    //-             h5 Estructurada
    //-             p Donde se prepara al estudiante con antelación y se utilizan criterios y herramientas específicos, como listas de cotejo o rúbricas, para registrar y evaluar el desempeño.
    //-           .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/2.png')})`}")
    //-     .col-sm-6.col-xl-3.mb-4-xl-0.col-12.p-2
    //-       .tarjeta.tarjeta-slide.arriba.color2(@mouseover="indicadorTarjetaSlide = false")
    //-         .indicador--hover(v-if="indicadorTarjetaSlide")
    //-         .tarjeta-slide__contenedor
    //-           .tarjeta-slide__contenido.p-4.p-xl-5
    //-             h5 Espontánea
    //-             p Donde el evaluador observa el desempeño del estudiante de manera natural, sin preparación previa. Se pueden usar listas de verificación o formularios de observación para registrar los comportamientos y habilidades observadas.
    //-           .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/3.png')})`}")

    .titulo.mb-5
      img(src='@/assets/curso/temas/ico.png', alt='Imagen decorativa')
      h5.mb-0 b. Observación indirecta

    p.mb-4(data-aos="fade-left") Este tipo de observación se realiza sin la presencia directa del evaluador. En su lugar, otras personas, como colegas o asistentes, observan y reportan el desempeño del estudiante al evaluador principal. Los instrumentos utilizados pueden incluir: 

    .row.justify-content-center.mb-4
      .col-lg-4.col-12.mb-3
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
              .col-4.mb-3
                img(src='@/assets/curso/temas/tema8/4.svg' alt='AvatarTop')
              h4.text-center Listas de chequeo
              p.text-center Para evaluar aspectos específicos del desempeño.
      .col-lg-4.col-12.mb-3
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
              .col-4.mb-3
                img(src='@/assets/curso/temas/tema8/5.svg' alt='AvatarTop')
              h4.text-center Informes de observación
              p.text-center Detalles proporcionados por los observadores externos.
      .col-lg-4.col-12.mb-3
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
              .col-4.mb-3
                img(src='@/assets/curso/temas/tema8/6.svg' alt='AvatarTop')
              h4.text-center Registros de actividades
              p.text-center Como exposiciones orales, demostraciones, debates y foros.

    p(data-aos="fade-left") Ambos tipos de observación son esenciales para proporcionar una evaluación completa y contextualizada del desempeño del estudiante, permitiendo obtener una visión más holística y precisa de sus habilidades y competencias.

    separador
    #t_8_2.titulo-segundo.color-acento-contenido
      h2 8.2 Técnicas de resolución de problemas
    p.mb-5(data-aos="fade-left") Las técnicas de resolución de problemas permiten evaluar la capacidad de los estudiantes para aplicar conocimientos y habilidades en la solución de situaciones complejas y reales. Entre las técnicas más destacadas se encuentran:

    .titulo.mb-5
      img(src='@/assets/curso/temas/ico.png', alt='Imagen decorativa')
      h5.mb-0 a. Técnica de casos

    p.mb-4(data-aos="fade-left") Esta técnica involucra la presentación de un caso o escenario realista en el cual el estudiante debe tomar decisiones basadas en la información proporcionada. El objetivo es evaluar la capacidad del estudiante para:

    .row.justify-content-center 
      .col-lg-10.col-12.desktop(data-aos="flip-up")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema8/7.svg', alt='Imagen decorativa')

          .tarjeta.color-secundario.p-3(x="14%" y="22.5%" numero="+")
            .h5.mb-2 Analizar
            p Comprender y descomponer el caso en sus componentes clave.

          .tarjeta.color-secundario.p-3(x="44.8%" y="9%" numero="+")
            .h5.mb-2 Resolver problemas
            p Desarrollar y justificar alternativas de solución basadas en el conocimiento adquirido.

          .tarjeta.color-secundario.p-3(x="65.4%" y="18.5%" numero="+")
            .h5.mb-2 Tomar decisiones
            p Evaluar y seleccionar la mejor opción entre las alternativas propuestas.

          .tarjeta.color-secundario.p-3(x="86.6%" y="25%" numero="+")
            .h5.mb-2 Comparar y evaluar
            p Reflexionar sobre las posibles soluciones y sus implicaciones.

      .col-12.movil
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema8/7_.svg', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-left") Esta técnica fomenta habilidades de pensamiento crítico, análisis, y toma de decisiones, preparando a los estudiantes para enfrentar situaciones reales en su futuro profesional.

    .titulo.mb-5
      img(src='@/assets/curso/temas/ico.png', alt='Imagen decorativa')
      h5.mb-0 b. Pruebas objetivas

    p(data-aos="fade-left") Estas pruebas requieren que el estudiante seleccione la respuesta correcta entre varias opciones proporcionadas. Se utilizan comúnmente en cuestionarios y exámenes y tienen varios propósitos:

    .row.justify-content-center.align-items-center
      .col-lg-7.col-12.mb-3(data-aos="flip-up")
        .row.justify-content-center
          .col-12.mb-0
            .tarjeta-avatar-b(data-aos="flip-up")
              .tarjeta-avatar-b__img(style="max-width: 600px")
                img(src='@/assets/curso/temas/tema8/8.svg' alt='AvatarTop')
              .tarjeta.tarjeta2
                .p-4
                  h4 Evaluar la memoria
                  p Medir el conocimiento especifico  y la capacidad de recordar información.
          .col-12.mb-0
            .tarjeta-avatar-b(data-aos="flip-up")
              .tarjeta-avatar-b__img(style="max-width: 600px")
                img(src='@/assets/curso/temas/tema8/9.svg' alt='AvatarTop')
              .tarjeta.tarjeta3
                .p-4
                  h4 Desarrollar conocimientos puntuales
                  p Enfocarse en la comprensión de hechos, términos y conceptos clave.
          .col-12.mb-0
            .tarjeta-avatar-b(data-aos="flip-up")
              .tarjeta-avatar-b__img(style="max-width: 600px")
                img(src='@/assets/curso/temas/tema8/10.svg' alt='AvatarTop')
              .tarjeta.tarjeta2
                .p-4
                  h4 Medir aprendizajes
                  p Evaluar el aprendizaje de forma eficiente y estandarizada, aunque es menos eficaz para evaluar habilidades críticas y de resolución de problemas complejos.
      .col-lg-3.col-6.mb-3.d-lg-flex.d-none
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema8/11.svg', alt='Imagen decorativa')

    p(data-aos="fade-left") Las pruebas objetivas son útiles para evaluar conocimientos de forma rápida y proporcionar una medida objetiva del desempeño, pero suelen complementarse con otras técnicas que evalúan habilidades más complejas.

    separador
    #t_8_3.titulo-segundo.color-acento-contenido
      h2 8.3 Técnicas de cuestionario
    p.mb-4(data-aos="fade-left") Las técnicas de resolución de problemas permiten evaluar la capacidad de los estudiantes para aplicar conocimientos y habilidades en la solución de situaciones complejas y reales. Entre las técnicas más destacadas se encuentran:

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Desarrollo de preguntas")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema8/12.png', alt='Imagen decorativa')
          .col-lg-6
            p.mb-3 Se crea un listado de preguntas relacionadas con las temáticas vistas en clase. Estas preguntas pueden ser:
            ul.lista-ul
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span <b>Preguntas abiertas</b>: requieren respuestas detalladas y elaboradas, permitiendo a los estudiantes demostrar su comprensión profunda del tema. Por ejemplo, "Describe cómo organizas tu rutina diaria para equilibrar tus responsabilidades personales y laborales".
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span <b>Preguntas cerradas</b>: ofrecen opciones de respuesta específicas (como verdadero/falso, selección múltiple) y permiten evaluar conocimientos específicos de manera más rápida. Por ejemplo, "¿Prefieres trabajar en un entorno de oficina o en casa?".
            
      .py-3.py-md-4(titulo="Formatos de administración")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema8/13.png', alt='Imagen decorativa')
          .col-lg-6
            ul.lista-ul
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span <b>Escrito</b> : los cuestionarios se administran en formato impreso o digital, permitiendo a los estudiantes responder de manera individual. 
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span <b>Oral</b> : las preguntas se hacen de forma verbal, a menudo en forma de entrevistas o discusiones en grupo. 

      .py-3.py-md-4(titulo="Instrumentos utilizados")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema8/14.png', alt='Imagen decorativa')
          .col-lg-6
            ul.lista-ul
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span <b>Cuestionario</b>: conjunto de preguntas estructuradas que los estudiantes responden en un formato escrito o digital.
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span <b>Entrevista</b>: técnica en la cual el evaluador hace preguntas directamente al estudiante y evalúa las respuestas en tiempo real.
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span <b>Autoevaluación</b>: permite a los estudiantes evaluar su propio conocimiento y comprensión, promoviendo la auto-reflexión y el aprendizaje autónomo.

    p(data-aos="fade-left") Las técnicas de cuestionario son herramientas ampliamente utilizadas en la evaluación educativa debido a su capacidad para proporcionar una medida estandarizada del conocimiento y su adaptabilidad a diversos formatos y niveles de comprensión. Sin embargo, a pesar de sus beneficios, también presentan algunas limitaciones que pueden afectar su efectividad. A continuación, se detallan tanto las ventajas como las limitaciones de estas técnicas, para ofrecer una visión completa de su aplicación en el contexto educativo.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span <i>Ventajas y limitaciones de las técnicas de cuestionario.</i>
    .tabla-a.clstabla.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Ventajas
            th Limitaciones
        tbody
          tr
            td.px-4 
              ul.lista-ul
                li.mb-4(style="margin-bottom: 2px") 
                  i.fas.fa-circle(style="font-size: 0.5em")
                  | La evaluación es rápida, ya que permite obtener resultados de manera ágil y eficiente.
            td.px-4 
             ul.lista-ul
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                | La evaluación puede ser superficial, ya que las preguntas cerradas pueden limitar la profundidad de la evaluación y no siempre capturan la capacidad de razonamiento crítico.
          tr(style="background-color: #F6F6F6")
            td.px-4 
              ul.lista-ul
                li.mb-4(style="margin-bottom: 2px") 
                  i.fas.fa-circle(style="font-size: 0.5em")
                  | Tiene facilidad de corrección. Los cuestionarios con respuestas correctas  cerradas pueden ser corregidos rápidamente, especialmente cuando se utilizan herramientas automatizadas.
            td.px-4 
             ul.lista-ul
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                | Hay una dependencia del diseño; la efectividad de la técnica depende en gran medida de la calidad y relevancia de las preguntas formuladas.
          tr
            td.px-4 
              ul.lista-ul
                li.mb-4(style="margin-bottom: 2px") 
                  i.fas.fa-circle(style="font-size: 0.5em")
                  | Su uniformidad proporciona una medida consistente del conocimiento entre todos los estudiantes, lo que facilita la comparación de resultados.
            td.px-4 
             ul.lista-ul
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                | Puede faltar contexto, ya que puede no proporcionar suficiente información para evaluar la comprensión completa del tema , especialmente en áreas que requieren  aplicaciones prácticas.
          tr(style="background-color: #F6F6F6")
            td.px-4 
              ul.lista-ul
                li.mb-4(style="margin-bottom: 2px") 
                  i.fas.fa-circle(style="font-size: 0.5em")
                  | Tiene una aplicación amplia, siendo adecuado para evaluar una amplia gama de contenidos y habilidades, desde conocimientos básicos hasta comprensión mas avanzada.
            td.px-4 
             ul.lista-ul
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                | Es rígida, ya que las opciones de respuestas limitadas pueden no reflejar adecuadamente la variedad de las formas en que los estudiantes pueden comprender y responder una pregunta.
          tr
            td.px-4
              ul.lista-ul
                li.mb-4(style="margin-bottom: 2px") 
                  i.fas.fa-circle(style="font-size: 0.5em")
                  span Ofrece <i>feedback</i> inmediato, proporcionando a los estudiantes retroalimentación rápida sobre su desempeño.
            td.px-4 
             ul.lista-ul
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span Presenta escasa interacción, ya que no fomenta la interacción o discusión entre los estudiantes, lo que puede limitar el desarrollo de habilidades comunicativas y colaborativas.

    separador
    #t_8_4.titulo-segundo.color-acento-contenido
      h2 8.4 Técnicas de solicitud de productos
    p.mb-4(data-aos="fade-left") En las técnicas de solicitud de productos, se requiere que los estudiantes entreguen un producto tangible que demuestre su desempeño o resuelva un problema utilizando los conocimientos adquiridos. Esta metodología ofrece a los estudiantes una mayor libertad en la ejecución de sus respuestas, permitiendo la aplicación práctica y creativa de lo aprendido.

    .titulo.mb-4
      img(src='@/assets/curso/temas/ico.png', alt='Imagen decorativa')
      h5.mb-0 Características principales

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center 
          .col-lg-8.col-12.mb-3
            ul.lista-ul
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span <b>Autonomía en la creación</b>: los estudiantes tienen la libertad de organizar y presentar su trabajo según sus propios criterios, siempre que sigan una serie de instrucciones proporcionadas.
              li.mb-4(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span <b>Aplicación práctica</b>: fomenta la aplicación de conocimientos en contextos reales o simulados, promoviendo una comprensión más profunda y funcional de los temas tratados.
              li(style="margin-bottom: 2px") 
                i.fas.fa-circle(style="font-size: 0.5em")
                span <b>Variedad de productos</b>: incluye una amplia gama de entregables como proyectos, monografías, ensayos, informes, presentaciones, y creaciones multimedia.
          .col-lg-4.col-12.mb-3
            figure.mb-3
              img(src='@/assets/curso/temas/tema8/15.png', alt='Imagen decorativa')
    
    p.mb-4(data-aos="fade-left") Instrumentos y herramientas utilizados:

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema8/16.svg' alt='AvatarTop')
        h4.text-center Proyectos
        p.text-center Actividades extensas que pueden involucrar investigación, desarrollo y presentación de soluciones o productos finales.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#FFE7AF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema8/17.svg' alt='AvatarTop')
        h4.text-center Monografías
        p.text-center Trabajos extensos que profundizan en un tema específico, generalmente con un enfoque académico.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema8/18.svg' alt='AvatarTop')
        h4.text-center Ensayos
        p.text-center Redacciones que permiten explorar y argumentar sobre temas específicos, desarrollando habilidades de análisis y escritura.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#FFE7AF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema8/19.svg' alt='AvatarTop')
        h4.text-center Informes
        p.text-center Documentos que resumen hallazgos, procesos o actividades realizadas, generalmente con un enfoque en la claridad y precisión de la información.

    p(data-aos="fade-left") Estas técnicas no solo evalúan el conocimiento adquirido, sino también habilidades prácticas como la investigación, el análisis crítico y la capacidad de comunicar ideas de manera efectiva. 

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
