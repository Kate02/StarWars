<template>
 	<div class="container-spinner" v-if="isSpinner">
	  	<trinity-rings-spinner
			  :animation-duration="1500"
			  :size="99"
			  color="rgba(255, 29, 94, 0.45)"
			/>
  </div>
</template>
<script>
  import { TrinityRingsSpinner } from 'epic-spinners'
	export default {
	    components:{
	    	TrinityRingsSpinner,
	    },	    
	    computed:{
	    		isSpinner () {
	    			return this.$store.getters.isSpinner
	    		}	      
	    },
	}
</script>
