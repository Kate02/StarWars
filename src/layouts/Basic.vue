<template>
  <div class="container-fluid main-container" id="app"> 
  	<navigation></navigation>> 	
	  <div class="row">
	  	<div class="col">
    		<router-view></router-view>	  		
	  	</div>
	  </div>
    <spinner></spinner>
  </div>
</template>
<script>
  import Navigation from '../components/dashboard/Navigation.vue'
  import Spinner from '../components/dashboard/Spinner.vue'
  export default {
    components: {
    	Navigation,
      Spinner
    },  
  }
</script>