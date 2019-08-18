<template>
    <div id="app" class="wrapper">
        <MNavbar/>
       <main>
            <b-container class="container">
                <b-badge class="title" variant="success">
                    <h1>Perfil: </h1>
                </b-badge>
                <hr>
                

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