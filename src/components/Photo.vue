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
  border: 3px solid gray;
  height: 250px;
  margin: 10px;
  transition: 0.3s;
  width: 250px;
}

.photo:hover {
  transform: scale(1.1);
}
</style>
