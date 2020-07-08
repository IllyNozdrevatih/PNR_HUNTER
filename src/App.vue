<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <v-container class="grey lighten-5">
      <v-row
        class="header-row"
      >
        <v-col
          class="col-12 col-md-3 header-logo"
        >
          <img src="https://i.work.ua/employer_design/0/4/8/1348048_company_logo_4.png">
        </v-col>
        <v-col
          class="col-12 col-md-9 header-form"
        >
          <form method="POST">
            <input 
              type="text" 
              placeholder="search"
              v-model="title"
            >
          </form>
        </v-col>
      </v-row>
      <router-view/>
    </v-container>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      title: ''
    }
  },
  methods: {
    ...mapMutations(['filterGiphysByTitle', 'updatevalidatedGiphys'])
  },
  watch: {
    title(){
      if(this.title.length > 0) {
        const el = document.querySelector('.giphy-list .lodaer');
        el.classList.add('is-active');
        setTimeout(() => {
          this.filterGiphysByTitle(this.title)
          el.classList.remove('is-active');
        }, 300)        
      }
      else { this.updatevalidatedGiphys() }
      return this.title
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  &-logo {}
  &-form {
    display: flex;
    align-items: center;
    form {
      width: 100%;
      input {
        width: 100%;
        border: 1px solid black;
        height: 40px;
        padding: 10px;
        border-radius: 5px;
      }
    }
  }
}
</style>
