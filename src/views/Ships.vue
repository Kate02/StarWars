<template>
  <div class="row main-content main-content-ships">
    <div class="col-6 offset-3 container-search">
  		<search v-on:set_value="setShips" placeholder="Search Ship"></search>
  	</div>
  	<div class="col-12 container-cards">
  		<div class="row">
				<transition name="component-fade" v-for="(card, index) in ships" :key="index" mode="out-in">
  				<ship-card  :card="card"></ship-card> 
  			</transition> 			
  		</div>
  	</div>
  </div>
</template>
<script>
  import ShipCard from '../components/cards/ShipCard'
  import Search from '../components/dashboard/Search'
  import Global from '../mixins/global.js'
	export default {
    components:{
    	ShipCard,
    	Search,
    },
    data(){
        return{
          ships: [],
        }
    },
    mixins: [Global],
    created() {
    	this.$store.dispatch('GET_INFO', {'url': 'https://swapi.dev/api/starships/'}).then((res)=>{
        console.log(res.data.results)
    	this.ships = this.sortname(res.data.results, 'name')})
    },
    methods: {
      setShips(value) {
      	this.$store.dispatch('GET_INFO', {'url': `https://swapi.dev/api/starships/?search=${value}`}).then((res)=>{
        	this.ships = this.sortname(res.data.results, 'name')
        })
      }
    },
	}
</script>
<style scoped>
  .component-fade-enter-active, .component-fade-leave-active {
      transition: opacity .5s ease;
  }
  .component-fade-enter, .component-fade-leave-to {
      opacity: 0;
  }
</style>
