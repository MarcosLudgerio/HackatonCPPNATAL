<template>
    <div id="app" class="wrapper">
        <MNavbar/>
        <main>
            <b-container class="container">
                <b-badge class="title" variant="success">
                    <h1>Suas trilhas: <b-badge variant="light">3</b-badge></h1>
                </b-badge>
                <hr>
                <cursos/>
            </b-container>  
        </main>
        <MFooter/>       
    </div>
</template>

<script>
import MNavbar from '../components/MNavbar.vue';
import Cursos from '../components/Cursos.vue';
import MFooter from '../components/MFooter.vue';
export default {
    name: '#app',
    components: {
        MNavbar,
        Cursos,
        MFooter
    },data: function(){

    }
}
</script>

<style>
    #app{
        background-color: #c7c7c7;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes > * {
        margin: 10px;
    }
    #content{
        color: rgb(32, 32, 32);
    }
    p{
        text-align:justify;
    }
    .coluna{
        margin-left: auto;
        margin-right: auto;
    }
    
</style>


