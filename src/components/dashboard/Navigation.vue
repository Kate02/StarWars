<template>
	<b-navbar toggleable="lg" type="dark" variant="" class="main-nav">
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
	  <b-collapse id="nav-collapse" is-nav>
	    <b-navbar-nav align="center">
	      <b-nav-item v-for="(item, index) in nav_items" :key="index" :to="item.href">{{item.title}}</b-nav-item>
	    </b-navbar-nav>
	  </b-collapse>
	</b-navbar>
</template>
<script>
export default {
  components: {
  	
  },
  data() {
  	return {
  		nav_items: [
  			{title: 'Home',href: '/',},
  			{title: 'Films',href: '/films',},
  			{title: 'Actors',href: '/actors',},
  			{title: 'Ships',href: '/ships',},
  		]
  	}
  },
}
</script>