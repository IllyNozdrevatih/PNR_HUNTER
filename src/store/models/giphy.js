import axios from 'axios'

export default {
  actions: {
    async getGiphys(ctx) { 
      const giphys = await axios.get('http://api.giphy.com/v1/gifs/search?api_key=o8u1czwu2UMPcNmn4KPp5pVrF8cFIAKh&q=cara-delevingne&limit=100')
          
      ctx.commit('updateGiphys', giphys.data.data)                 
    },
  },
  mutations: {
    updateGiphys(state, giphys){            
      state.giphys = giphys         
      state.validatedGiphys = giphys
    },
    updatevalidatedGiphys(state){
      state.validatedGiphys = state.giphys 
    },
    filterGiphysByTitle(state, title){
      state.validatedGiphys = state.giphys.filter(item => {
        if(item.title.toLowerCase().trim().includes(title.toLowerCase().trim())) return true
        else false
      })
    }
  },
  state: {
    giphys: [],
    validatedGiphys: []
  },
  getters: {
    allGiphys(state){
      return state.giphys
    },
    allValidatedGiphys(state){
      return state.validatedGiphys
    },
  }
}