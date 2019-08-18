<template>
  <div id="app">
      <b-carousel
        id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    controls
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption-html=  "Gestão"  
      text="A Administração ou Gestão é a ciência social que estuda e sistematiza as práticas usadas para administrar."
    >
      <img slot="img"  class="d-block img-fluid w-100"
             src="http://s2.glbimg.com/jFL3-zPIRfmUynDwmDooslBTi0k=/e.glbimg.com/og/ed/f/original/2016/04/29/gestao.jpg" alt="image slot" v-on:click="gotoAnyWhere">
    </b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
  </b-carousel>
  </div>
</template>

<script>
export default {
    el: '#app',
    data: function(){
        return{
            trilhas:[
                {Nome: String, Texto: String, Img: String}
            ]
        }
    },methods: {
    gotoAnyWhere () {
      window.location.href = "/trilha";
    }
  }
}
</script>

<style>
.card{
    width: 18rem;
}
</style>
