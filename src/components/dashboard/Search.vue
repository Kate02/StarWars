<template>
	<b-input-group class="mt-3 search">
    <b-form-input v-model="value" :placeholder="placeholder" class="search-textfield"></b-form-input>
  </b-input-group>
</template>
<script>
	export default {
    props:['placeholder'],
    computed:{
  		value : {
  			get: function () {
          return
        },
        set: function (newValue) {
          this.$emit('set_value', newValue)
        } 
  		}	      
    },
	}
</script>
<style scoped></style>