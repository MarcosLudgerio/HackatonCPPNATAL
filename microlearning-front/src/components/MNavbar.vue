<template>
    <b-navbar id="app" toggleable="lg" type="dark" variant="success">
        <b-navbar-brand id="Logo" href="#"><img src='../assets/imgs/logo.png' alt=""> MicroLearning</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav right>
            <b-navbar-nav class="ml-auto">
                <b-nav-item :href="'/'">
                    <b-button class="botao" square variant="outline-sucess">Home</b-button>    
                </b-nav-item>
                <b-nav-item  :href="'/trilhas'">
                    <b-button class="botao"  square variant="outline-sucess">Trilhas</b-button>    
                </b-nav-item>
                <b-nav-item :href="'/equipe'">
                    <b-button class="botao" square variant="outline-sucess">Equipe</b-button>
                </b-nav-item>
                <b-nav-item  :href="'/entrar'" >
                    <b-button class="botao" square variant="outline-sucess">Entrar</b-button>
                </b-nav-item>
            </b-navbar-nav>     
        </b-collapse>
    </b-navbar>

</template>

<script>
export default {
    
}
</script>

<style scoped>
    .botao{
        background-color: rgb(92, 206, 64);
        color: whitesmoke;
        border-color: rgb(112, 230, 141);
    }
    #Logo{
        font-size: 200%; 
    }
    #Logo img {
        height: 15vh;
    }
</style>

