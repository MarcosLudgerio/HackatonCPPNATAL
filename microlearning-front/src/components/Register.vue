<template>
    <div id="app"> 
        <h1>{{ msg }}</h1>
        <b-input-group prepend="Email:">
            <b-form-input aria-label="email"></b-form-input>
        </b-input-group>
        <br/>
        <b-input-group prepend="User:">
            <b-form-input aria-label="usuario"></b-form-input>
        </b-input-group>
        <br/>
        <b-input-group prepend="Senha:">
            <b-form-input aria-label="senha"></b-form-input>
        </b-input-group>
        <br/>
        <b-button class="mr-3" squared variant="success">Efetuar login</b-button>
        <b-button squared variant="success">Cadastro</b-button>
    </div>
</template>

<script>
export default {
    el: '#app',
    data: function () {
        return{
            msg: 'Login',
       
        }
    }
}
</script>

<style scoped>

</style>