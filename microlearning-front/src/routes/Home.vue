<template>
    <div id="app" class="wrapper">
        <MNavbar/>
        <main>
            <b-container class="container">
                <b-row id="content">
                    <b-col>
                        <b-badge class="title" variant="success">
                            <h1>Bem vindo</h1>
                        </b-badge>
                        <hr>
                        <p> Microlearning é uma estratégia de treinamento corporativo que vem crescendo muito nos últimos anos por se mostrar muito eficiente, essa metodologia de ensino procura sair do padrão de aulas densas e complexas desfragmentando em pequenas atividades que desenvolvem as habilidades necessárias para os funcionários, reduzindo custos e trazendo melhores resultados. </p>
                        <p>Esta plataforma foi desenvolvida com base na tese de doutorado (COSTA, Thaíse Kelly de Lima. Uma arquitetura para portais de Serious Games e ambientes virtuais com serviços de integração e acompanhamento de atividades. 2017. 217 f. Tese (Doutorado em Modelos de Decisão e Saúde) - Universidade Federal da Paraíba, João Pessoa, 2017.)
que tem como principal objetivo o desenvolvimento de uma plataforma de jogos educacionais e o acompanhamento do desenvolvimento dos alunos.
</p>
                    
                    </b-col>
                </b-row> 
            </b-container>  
        </main>
        <MFooter/>       
    </div>
</template>

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
    
</style>


