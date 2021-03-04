<template>
	<div class="col-lg-4 container-card" >
	  <transition name="component-fade" mode="out-in">
			<b-card
		    :title="card.name"
		    class="card"
		    v-bind:class="{'card-full': isMore}"
		  >
		    <b-card-text class="card-info">
				    <h6><small>Birth Year:  </small>{{card.birth_year}}</h6>
						<h6>Films</h6>
						<ul>
							<li v-for="(film, index) in films" :key="index" >{{film}}</li>
						</ul>
						<div class="card-info-more" v-if="isMore">
				    	<h6><small>Gender:  </small>{{card.gender}}</h6>
				    	<h6><small>Hair Color: </small>{{card.hair_color}}</h6>
				    	<h6><small>Height: </small>{{card.height}}</h6>
				    	<h6><small>Mass: </small>{{card.mass}}</h6>
				    	<h6><small>Skin Color: </small>{{card.skin_color}}</h6>
						</div>
		    </b-card-text>
		    <b-button v-if="!isMore" class="card-btn" :to="`/actors/${path}`" v-on:click="ShowMore" variant="btn-link">More Details</b-button>
		    <b-button v-else :to="`/actors`" class="card-btn card-btn-hide" v-on:click="HideMore" variant="btn-link">Hide Details</b-button>
		  </b-card>
		</transition>
	</div>
</template>
<script>
export default {
  props:['card'],
  data() {
  	return {
  		isMore : false,
  		films: [],
  		path: ''
  	}
  },
  created() {
  	this.path = this.card.name.toLowerCase().replace(/ /g, "_")
  	this.card.films.map((film_url, index, array) => {
    	this.$store.dispatch('GET_INFO', {'url': `${film_url}`}).then((res)=>{
    			this.films.push(res.data.title)
      	})
		})

  },
  methods:{	        
		ShowMore(){
			this.isMore = true
		},
		HideMore(){
			this.isMore = false
		}
	}
}
</script>
<style scoped>
	.component-fade-enter-active, .component-fade-leave-active {
      transition: opacity .5s ease .2s;
  }
  .component-fade-enter, .component-fade-leave-to {
      opacity: 0;
  }
  .card-btn {
  	color: #fb78b4;
  	font-size: 18px;
  }
</style>
