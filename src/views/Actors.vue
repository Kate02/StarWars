<template>
  <div class="row main-content main-content-actors">
    <div class="col-6 offset-3 container-search">
  		<search v-on:set_value="setActors" placeholder="Search Actor"></search>
  	</div>
  	<div class="col-12 container-cards">
  		<div class="row">
				<transition name="component-fade" v-for="(card, index) in actors" :key="index" mode="out-in">
  				<actor-card  :card="card"></actor-card> 
  			</transition> 			
  		</div>
  	</div>
  </div>
</template>
<script>
  import ActorCard from '../components/cards/ActorCard'
  import Search from '../components/dashboard/Search'
  import Global from '../mixins/global.js'
	export default {
    components:{
    	ActorCard,
    	Search,
    },
    data(){
        return{
          actors: [],
        }
    },
    mixins: [Global],
    created() {
    	this.$store.dispatch('GET_INFO', {'url': 'https://swapi.dev/api/people/'}).then((res)=>{
        console.log(res.data.results)
    		this.actors = this.sortname(res.data.results, 'name')})
    },
    methods: {
      sortname(data,text) {
        let results = data.sort(function(a, b) {
          let nameA=a[text].toLowerCase(), 
              nameB=b[text].toLowerCase()

          if (nameA < nameB) return -1
          if (nameA > nameB) return 1
          return 0          
        })

        return results
      },
      setActors(value) {
      	this.$store.dispatch('GET_INFO', {'url': `https://swapi.dev/api/people/?search=${value}`}).then((res)=>{
        	this.actors = this.sortname(res.data.results, 'name')
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
