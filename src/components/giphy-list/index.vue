<template >
  <div class="giphy-list">
    <div class="lodaer"></div>
    <v-row v-if="Array.isArray(allValidatedGiphys)">
      <v-col
        v-for="(item, index) in allValidatedGiphys"
        :key="index"
        cols="6"
        sm="4"
        md="3"
      >
        <item :item="item"/>
      </v-col>
    </v-row>
    <v-row v-if="!Array.isArray(allValidatedGiphys)">
      <v-col      
        cols="3"
      >
        <item :item="allValidatedGiphys"/>
      </v-col>
    </v-row>
    <v-row v-if="!allValidatedGiphys.length">
      <v-col>
        <p>Not Found</p>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
        v-if="!activeFilter"
        v-model="page"
        :length="5"
      ></v-pagination>
    </div>
    <div class="share">
      <div id="share-fallback" class="share-buttons">
        <div v-if="hasNavigator">
          <div class="share-btn sh" href="#" target="_blank">S</div>
        </div>
        <div class="share-wrap" v-if="!hasNavigator">
          <a class="share-btn fb" href="https://facebook.com/sharer/sharer.php?u=https://github.com/IllyNozdrevatih" target="_blank">F</a>
          <a class="share-btn ln" href="https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/IllyNozdrevatih" target="_blank">Ln</a>         
        </div>        
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import item from './item'

export default {
  name: 'List',
  components: {
    item
  },
  data(){
    return {
      page: 1,
      count_items: 20
    }
  },
  methods: {
    ...mapActions(['getGiphys']),
    initShare(){
      const shareButton = document.querySelector('.share-btn');
    
      shareButton.addEventListener('click', event => {
        navigator.share({
          title: 'IllyNozdrevatih git',
          url: 'https://github.com/IllyNozdrevatih'
        }).then(() => {
          console.log('Thanks for sharing!');
        })
        preventDefault()
        .catch(console.error);
        return false
      });
    }    
  },
  mounted () {
    this.getGiphys();

    if(this.hasNavigator) this.initShare();   
  },  
  computed: {
    allValidatedGiphys(){
      let allValidatedGiphys = this.$store.getters.allValidatedGiphys
      let allGiphys = this.$store.getters.allGiphys

      if (!this.activeFilter) {
        let vaidItems;
        if(this.page === 1){
          vaidItems = allValidatedGiphys.filter((item, index) => {
            return index < this.count_items
          })
        } else {
          vaidItems = allValidatedGiphys.filter((item, index) => {
            let form = this.count_items * (this.page - 1);
            let to = this.count_items * this.page;

            if((form <= index) && (index < to)){            
              return  true
            }
            return false              
          })
        }      
        return vaidItems
      } else {
        return allValidatedGiphys
      }
    },
    activeFilter(){
      let allValidatedGiphys = this.$store.getters.allValidatedGiphys
      let allGiphys = this.$store.getters.allGiphys

      return allValidatedGiphys !== allGiphys
    },
    hasNavigator(){
      return Boolean(navigator.share)
    }
  }
}

</script>

<style lang="scss">
  .giphy-list {
    position: relative;
    .lodaer {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0%;
      background: black;
      transition: all .3s ease-in-out;
      &.is-active {
        height: 100%;
      }
    }
  }
  .giphy-list .row .col {
    margin-bottom: 1rem;
  }
  .giphy-list .theme--light.v-pagination .v-pagination__item--active {
    color: #000;    
    border: 1px solid;
  }
  .theme--light.v-pagination .v-pagination__navigation:focus {
    border: 0px solid;
    outline: unset;
  }
  .giphy-list .share {
    position: fixed;
    top: 15px;
    right: 15px;
    .share-wrap {
      display: flex;
      @media (max-width: 400px){
        flex-flow: column;
      }
    }
    .share-btn {
      width: 33px;
      height: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: white;
      font-size: 18px;
      text-decoration: unset;
      transition: all .3s ease-in-out;
      cursor: pointer;
      &.fb {
        background-color: #3b5998;
      }
      &.ln {
        background-color: #3b59ff;
      }
      &.sh {
        background-color: violet;
      }
      margin-right: 5px;
      &:last-child {
        margin-right: 0;
      }
      @media (max-width: 400px){
        margin-bottom: 5px;
        margin-right: 0;
        &:last-child {
          margin-right: 0;
          margin-bottom: 0;
        }
      }
      &:hover {
        opacity: .7;
      }
    }
  }
</style>