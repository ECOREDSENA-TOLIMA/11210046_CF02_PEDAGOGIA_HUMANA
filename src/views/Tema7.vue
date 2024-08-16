<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Material educativo
    
    figure.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/tema7/1.png', alt='Imagen decorativa')

    p(data-aos="fade-left") El material educativo comprende todas las herramientas y recursos que utiliza el profesor, docente, formador o instructor para facilitar la comprensión de los conocimientos y alcanzar los objetivos de aprendizaje. La clasificación del material se basa en su lugar de uso: dentro o fuera del aula.

    separador
    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Material dentro del aula o ambiente de formación
    
    p.mb-4(data-aos="fade-left") En el entorno del aula, se utilizan diversos recursos para apoyar el proceso de enseñanza-aprendizaje. Con la creciente integración de la tecnología, es fundamental aprovechar recursos que permitan la interacción entre estudiantes y fomenten el debate y la construcción colectiva del conocimiento. Entre estos materiales se encuentran:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema7/2.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4.text-center Recursos tecnológicos
              p Computadoras, proyectores, teléfonos inteligentes, reproductores de audio y video, entre otros equipos especializados en áreas específicas de desempeño o profesión.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema7/3.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4.text-center Materiales didácticos
              p carteleras, fotografías, mapas, instrumentos de laboratorio, y otros recursos que apoyan la comprensión de los contenidos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema7/4.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4.text-center Ambientes especiales de aprendizaje
              p espacios diseñados para áreas específicas, como cocinas didácticas en gastronomía, entornos y bahías en metalmecánica, o aulas especializadas en el área de la salud.

    separador
    #t_7_2.titulo-segundo.color-acento-contenido
      h2 7.2 Materiales fuera del aula
    
    p.mb-4(data-aos="fade-left") Fuera del aula, es crucial utilizar recursos que complementen el aprendizaje y faciliten el acceso a la información desde diversos lugares. Estos materiales incluyen:

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center 
          .col-lg-4.col-8.mb-3
            figure
              img(src='@/assets/curso/temas/tema7/5.png', alt='Imagen decorativa')
          .col-lg-8.col-8.mb-3
            LineaTiempoD.color-acento-botones.especial.mb-5
              .row(numero="1" titulo="Textos de apoyo")
                .col-md-12.mb-4.mb-md-0
                  p Libros en formato físico o digital, disponibles en bibliotecas o a través de plataformas electrónicas.
              .row(numero="2" titulo="Asesorías extracurriculares")
                .col-md-12.mb-4.mb-md-0
                  p Sesiones presenciales o virtuales (chats, foros, blogs, wikis) que brindan apoyo adicional a los estudiantes.
              .row(numero="3" titulo="Actividades complementarias")
                .col-md-12.mb-4.mb-md-0
                  p Salidas académicas, visitas a lugares relevantes para la formación, laboratorios guiados en diversas asignaturas, y prácticas externas en empresas que supervisan el desempeño de los estudiantes.
    
    p(data-aos="fade-left") En la implementación de la formación, es fundamental considerar todos los tipos de enseñanza-aprendizaje disponibles para identificar y aplicar estrategias educativas eficaces y ajustadas a los objetivos del curso. Conocer los estilos de aprendizaje de los estudiantes es esencial para desarrollar estrategias de aprendizaje y evaluación que se alineen con las metas educativas.

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
