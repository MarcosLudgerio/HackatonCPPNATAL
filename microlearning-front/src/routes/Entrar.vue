<template>
  <div id="app" class="wrapper">
        <MNavbar/>
        <main>
            <div class="container">
                <b-container  class="login">
                        <b-col>
                            <h1>Login</h1>
                            <br>
                            <Login/>
                        </b-col>
                </b-container>
            </div>
        </main>
        <MFooter/>
  </div>
</template>

<script>
import MNavbar from '../components/MNavbar.vue';
import Login from '../components/Login.vue';
import MFooter from '../components/MFooter.vue';
export default {
    name: '#app',
    components: {
        MNavbar,
        Login,
        MFooter

    }
}
</script>

<style>
    *{
        text-align: center;
        
    }
    .login{
        padding: 10vh;
        size: 50%;
        color: rgb(26, 26, 26);
    }
</style>