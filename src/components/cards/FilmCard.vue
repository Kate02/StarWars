<template>
	<div class="col-lg-4 container-card" >
	  <transition name="component-fade" mode="out-in">
			<b-card
		    :title="card.title"
		    class="card"
		    v-bind:class="{'card-full': isMore}"
		  >
		    <b-card-text class="card-info">
		    	<h6><small>Director:  </small>{{card.director}}</h6>
		    	<h6><small>Producer:  </small>{{card.producer}}</h6>
		    	<h6><small>Release: </small>{{card.release_date}}</h6>
		    	<h6><small>Episode: </small>{{card.episode_id}}</h6>
						<div class="card-info-more" v-if="isMore">
			    		<p>{{card.opening_crawl}}</p>
						</div>
		    </b-card-text>
		    <b-button v-if="!isMore" class="card-btn" :to="`/films/${path}`" v-on:click="ShowMore" variant="btn-link">More Details</b-button>
		    <b-button v-else :to="`/films`" class="card-btn card-btn-hide" v-on:click="HideMore" variant="btn-link">Hide Details</b-button>
		  </b-card>
		</transition>
	</div>
</template>
<script>
export default {
  data() {
  	return {
  		isMore : false,
  		path: '',
  	}
  },
  created() {
  	this.path = this.card.title.toLowerCase().replace(/ /g, "_")
  },
  props:['card'],
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
