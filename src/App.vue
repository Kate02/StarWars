<template>
  <component v-bind:is="layout"></component>
</template>
<script>
  import Basic from './layouts/Basic';
  import Vue from 'vue';
  import BootstrapVue from 'bootstrap-vue';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';

  Vue.use(BootstrapVue);

  export default {
    components:{
      'basic-layout': Basic,
    },
    computed: {
      layout(){
        return this.$route.meta.layout
      }
    },
  }
</script>
<style lang="sass">
  @import './sass/app.scss'
</style>
