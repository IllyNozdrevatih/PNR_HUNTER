<template>
  <div class="home">
    <giphy-list/>
  </div>
</template>

<script>
import GiphyList from '@/components/giphy-list'

export default {
  name: 'Home',
  components: {
    GiphyList
  }
}
</script>
