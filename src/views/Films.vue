<template>
  <div class="row main-content main-content-films">
  	<div class="col-6 offset-3 container-search">
  		<search v-on:set_value="setFilms" placeholder="Search Film"></search>
  	</div>
  	<div class="col-12 container-cards">
  		<div class="row">
				<transition name="component-fade" v-for="(card, index) in films" :key="index" mode="out-in">
  				<film-card  :card="card"></film-card> 
  			</transition> 
  		</div>
  	</div>
  </div>
</template>
<script>
  import FilmCard from '../components/cards/FilmCard'
  import Search from '../components/dashboard/Search'
  import Global from '../mixins/global.js'
	export default {
    components:{
    	FilmCard,
    	Search,
    },
    data(){
        return{
          films: [],
        }
    },
    mixins: [Global],
    created() {
    	this.$store.dispatch('GET_INFO', {'url': 'https://swapi.dev/api/films/'}).then((res)=>{ 
    		this.films = this.sortname(res.data.results, 'title')
      })
    },
    methods: {
      setFilms(value) {
      	this.$store.dispatch('GET_INFO', {'url': `https://swapi.dev/api/films/?search=${value}`}).then((res)=>{
        	this.films = this.sortname(res.data.results, 'title')
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