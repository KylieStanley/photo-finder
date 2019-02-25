<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="search">
      <button class="search-btn">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null
    }
  },
  methods: {
    onSubmit() {
      this.$emit('searched', this.name)
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
