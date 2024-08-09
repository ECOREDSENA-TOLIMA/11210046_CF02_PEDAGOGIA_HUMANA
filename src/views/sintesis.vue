<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe una visión general de los aspectos esenciales del plan de formación. Cubre los recursos educativos necesarios, desde humanos y financieros hasta materiales didácticos. Examina los ambientes de aprendizaje y los programas de formación, y clasifica los medios utilizados, incluyendo recursos didácticos, tecnologías de la información y recursos multimedia. También aborda estrategias de formación, diferenciando enfoques centrados en el docente, el estudiante, el proceso y el conocimiento, y detalla las metodologías activas y pasivas. Se exploran técnicas e instrumentos de evaluación como la observación, la resolución de problemas y los cuestionarios, además de la evaluación de aprendizajes, con tipos, características y procesos evaluativos. Finalmente, se incluyen planes de mejoramiento y técnicas de registro y sistematización, fundamentales para la mejora continua en educación.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen decorativa")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
