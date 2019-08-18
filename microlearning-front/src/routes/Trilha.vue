<template>
    <div id="app" class="wrapper">
        <MNavbar/>
       <main>
            <b-container class="container">
                <b-badge class="title" variant="success">
                    <h1>Trilha de gestão: </h1>
                </b-badge>
                <hr>
                <b-row class="justify-content-md-center">
                    <b-col lg="3" class="botao mr-3" id="Assunto"> <span>Acessar Conteudo</span></b-col>
                    <b-col lg="3" class="botao mr-3" id="Questionario"><span>Acessar Questionario</span></b-col>
                </b-row>

            </b-container>  
        </main>
        <MFooter/>       
    </div></template>

<script>
import MNavbar from '../components/MNavbar.vue';
import MFooter from '../components/MFooter.vue';
export default {
    name: '#app',
    components: {
        MNavbar,
        MFooter
    },data: function(){

    }
}
</script>

<style scoped>
span{
    line-height:20vh;
}

.botao{
    height: 20vh;
    border-radius: 10px;
    margin-bottom: 5vh  ;

}

#Questionario{
    background-color: brown;
    
}
#Assunto{
    background-color: cornflowerblue;

}
</style>