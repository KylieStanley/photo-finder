<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input @input="updateSearch" type="text" v-model="search" />
      <button class="search-btn">Search</button>
    </form>
  </div>
</template>

<script>
import { cleanPhotos, parseQueryString } from '@/helper.js'
export default {
  data() {
    return {
      search: null
    }
  },
  methods: {
    async onSubmit() {
      const search = parseQueryString(this.search)
      const url = `https://api.unsplash.com/search/photos?client_id=c7c68ecb7f043eb6d4e2fcaf6866fe06994661eac0fc84ec3859fc15fefc6ff4&query=${search}`
      const response = await fetch(url)
      const results = await response.json()
      let photos = cleanPhotos(results.results)
      this.$emit('searched', photos)
    },
    updateSearch() {
      this.search = event.target.value
    }
  }
}
</script>

<style scoped>
input {
  border-radius: 20px;
  border-width: 2px;
  border-color: gray;
  border-top-color: gray;
  padding: 0 10px;
  margin-right: 5px;
  height: 30px;
  width: 200px;
}
.search-btn {
  background-color: #0094d3;
  border: transparent;
  border-radius: 30px;
  color: #fff;
  font-size: 0.8rem;
  padding: 9px 13px;
}
</style>
