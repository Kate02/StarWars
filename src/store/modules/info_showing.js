import axios from 'axios'

export const info_showing = {
  state: {
  	isSpinner: false,
  },
  getters:{
  		isSpinner: state => state.isSpinner,
  },
  mutations: {
  	SET_IS_SPINNER(state, payload) {
  			state.isSpinner = payload
  	},
  },
  actions: {
  	GET_INFO({ commit ,state } , {url,}){
  		commit('SET_IS_SPINNER', true)
      return axios
	      .get(url)
	      .then(response => { return response })
	      .catch(error => { return `error - ${error}` })  		
	      .finally(() => (commit('SET_IS_SPINNER', false)));
    }
  },
}
