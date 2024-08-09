<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Evaluación de los aprendices

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema9/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A nivel internacional, la Organización Internacional de Normalización (ISO) establece normativas para garantizar la calidad de productos y procesos en diversos sectores. En el ámbito educativo, estas normativas también se aplican para asegurar la calidad de los procesos de enseñanza y aprendizaje. La evaluación se convierte en una herramienta fundamental para recolectar, analizar y tomar decisiones sobre el proceso educativo, y sirve como base para determinar el nivel de competencias adquiridas por los estudiantes.

    separador
    #t_9_1.titulo-segundo.color-acento-contenido
      h2 9.1 Tipos de evaluación
    
    p.mb-4(data-aos="fade-left") La evaluación del aprendizaje es una parte esencial del proceso educativo, y su eficacia depende de la correcta aplicación de diferentes tipos de evaluación. Cada tipo tiene un propósito específico y se utiliza en distintos momentos del proceso formativo para proporcionar una visión completa del progreso y rendimiento del estudiante. A continuación, se describen los tres principales tipos de evaluación: diagnóstica, formativa y sumativa, cada uno con características y objetivos particulares que contribuyen al éxito educativo general. Estos tipos de evaluación permiten una comprensión profunda del aprendizaje y ayudan a ajustar y mejorar las estrategias pedagógicas.

    .row.justify-content-center 
      .col-lg-10.col-12.desktop(data-aos="flip-up")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema9/2.svg', alt='Imagen decorativa')

          .tarjeta.color-secundario.p-3(x="11%" y="18.5%" numero="+")
            .h5.mb-2 Analizar
            p Comprender y descomponer el caso en sus componentes clave.

          .tarjeta.color-secundario.p-3(x="11%" y="44%" numero="+")
            .h5.mb-2 Resolver problemas
            p Desarrollar y justificar alternativas de solución basadas en el conocimiento adquirido.

          .tarjeta.color-secundario.p-3(x="11%" y="68.5%" numero="+")
            .h5.mb-2 Tomar decisiones
            p Evaluar y seleccionar la mejor opción entre las alternativas propuestas.

      .col-12.movil
        figure.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema9/2_.svg', alt='Imagen decorativa')

    separador
    #t_9_2.titulo-segundo.color-acento-contenido
      h2 9.2 Características de la evaluación
    
    p.mb-4(data-aos="fade-left") Las características de la evaluación definen su naturaleza y eficacia en el proceso educativo. Entender estas características es fundamental para garantizar que la evaluación no solo mida el rendimiento del estudiante, sino que también contribuya al desarrollo continuo del aprendizaje. A continuación, se presentan las principales características que deben considerarse para que la evaluación sea efectiva, integral y adecuada a las necesidades del proceso educativo.

    .row.justify-content-center.mb-4
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema6/3.svg' alt='AvatarTop')
          h4.text-center Sistemática
          p Se lleva a cabo de manera organizada y metódica para asegurar una aplicación coherente.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema9/4.svg' alt='AvatarTop')
          h4.text-center Medible y axiológica:
          p Permite cuantificar el rendimiento y evaluar valores y actitudes.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema9/5.svg' alt='AvatarTop')
          h4.text-center Global y comprensiva
          p Aborda todos los aspectos del aprendizaje, incluyendo conocimientos, habilidades y actitudes.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema9/6.svg' alt='AvatarTop')
          h4.text-center Planeada
          p Se estructura con anticipación, estableciendo objetivos, métodos y criterios claros.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema9/7.svg' alt='AvatarTop')
          h4.text-center Integral
          p Considera el aprendizaje de manera holística, integrando diversas dimensiones del conocimiento.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema9/8.svg' alt='AvatarTop')
          h4.text-center Participativa
          p Involucra a estudiantes, docentes y otros actores en el proceso de evaluación, promoviendo la colaboración y la retroalimentación.
        .tarjeta.color-primario2.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema9/9.svg' alt='AvatarTop')
          h4.text-center Continua
          p Se realiza de manera constante a lo largo del proceso educativo para permitir ajustes y mejoras continuas.

    separador
    #t_9_3.titulo-segundo.color-acento-contenido
      h2 9.3 Proceso evaluativo
    p.mb-4(data-aos="fade-left") La evaluación del aprendizaje es un proceso sistemático que abarca varias etapas para garantizar que los estudiantes alcancen los objetivos educativos de manera efectiva. A continuación, se presenta una representación detallada de este proceso:

    .tarjeta.tarjeta--gris1.p-4.mb-5
      LineaTiempoC.color-acento-botones.especial(text-small)
        .row(titulo="a.")
          .col-md-6.mb-4.mb-md-0.p-4
            h4.mb-4 Definición de objetivos y criterios.
            li.mb-4 <b>Establecimiento de objetivos</b>: determinar claramente qué se espera que los estudiantes aprendan y logren al final del curso o módulo. 
            li <b>Criterios de evaluación</b>: definir los parámetros que se usarán para medir el logro de los objetivos, incluyendo los niveles de competencia y los resultados esperados.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema9/10.png', alt='Imagen decorativa')

        .row(titulo="b.")
          .col-md-6.mb-4.mb-md-0.p-4
            h4.mb-4 Selección de métodos y técnicas de evaluación.
            li.mb-4 <b>Elección de técnicas</b>: decidir qué técnicas de evaluación (exámenes, proyectos, observaciones, etc.) se utilizarán para recoger datos sobre el aprendizaje.
            li <b>Diseño de instrumentos</b>: desarrollar o seleccionar herramientas específicas (cuestionarios, rúbricas, listas de cotejo) que se alineen con los objetivos y criterios establecidos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema9/11.png', alt='Imagen decorativa')

        .row(titulo="c.")
          .col-md-6.mb-4.mb-md-0.p-4
            h4.mb-4 Implementación de la evaluación.
            li.mb-4 <b>Aplicación de técnicas</b>: ejecutar las evaluaciones de acuerdo con los métodos y técnicas seleccionadas, asegurando que se realicen en condiciones justas y consistentes.
            li <b>Recolección de datos</b>: recopilar información sobre el desempeño de los estudiantes durante y después de las actividades evaluativas.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema9/12.png', alt='Imagen decorativa')

        .row(titulo="d.")
          .col-md-6.mb-4.mb-md-0.p-4
            h4.mb-4 Análisis de resultados.
            li.mb-4 <b>Revisión y evaluación</b>: analizar los datos recogidos para determinar el grado de cumplimiento de los objetivos de aprendizaje.
            li <b>Interpretación de resultados</b>: evaluar la información en el contexto de los criterios establecidos para proporcionar una visión clara del rendimiento y progreso de los estudiantes.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema9/13.png', alt='Imagen decorativa')

        .row(titulo="e.")
          .col-md-6.mb-4.mb-md-0.p-4
            h4.mb-4 Retroalimentación y ajustes.
            li.mb-4 <b>Retroalimentación</b>: proporcionar a los estudiantes comentarios constructivos sobre su desempeño, destacando áreas de mejora y logros.
            li <b>Ajustes en la enseñanza</b>: revisar y modificar las estrategias de enseñanza y los métodos de evaluación según sea necesario para mejorar el proceso educativo y abordar las necesidades identificadas.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema9/14.png', alt='Imagen decorativa')

        .row(titulo="f.")
          .col-md-6.mb-4.mb-md-0.p-4
            h4.mb-4 Evaluación continua y final.
            li.mb-4 <b>Evaluación continua</b>: realizar evaluaciones periódicas durante el proceso educativo para monitorear el progreso y realizar ajustes oportunos.
            li <b>Evaluación final</b>: al concluir el curso o módulo, llevar a cabo una evaluación sumativa para determinar si los estudiantes han alcanzado los objetivos finales y certificarlos si es necesario.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema9/15.png', alt='Imagen decorativa')



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
