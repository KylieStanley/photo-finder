<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <input @input="updateSearch" type="text" v-model="search">
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
      const key = process.env.APIKEY
      const search = parseQueryString(this.search)
      const url = `https://api.unsplash.com/search/photos?per_page=20&client_id=${key}&query=${search}`
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
form {
  margin: 25px 0;
}

input {
  border-radius: 20px;
  border-width: 2px;
  border: 2px solid gray;
  font-size: 16px;
  margin-right: 5px;
  outline: none;
  padding: 0 13px;
  height: 32px;
  width: 250px;
}
.search-btn {
  background-color: #0094d3;
  border: transparent;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  padding: 9px 13px;
  transition: 0.2s;
}

.search-btn:hover {
  background-color: #0082bd;
}
</style>
