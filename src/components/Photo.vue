<template>
  <div
    class="photo"
    v-bind:style="{ 'background-image': `url(${image})` }"
  ></div>
</template>

<script>
export default {
  props: {
    image: String
  }
}
</script>

<style scoped>
.photo {
  border-radius: 10px;
  border: 3px solid #8080807a;
  height: 230px;
  margin: 10px;
  transition: 0.3s;
  width: 325px;
}

.photo:hover {
  transform: scale(1.1);
}
</style>
