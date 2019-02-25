<template>
  <div class="home">
    <Header />
    <Form @searched="filterPhotos" />
    <div class="photo-container">
      <div v-if="Array.isArray(photos) && !photos.length">
        There are no photos that match your search
      </div>
      <Photo
        v-else
        v-for="photo in photos"
        :key="photo.id"
        :image="photo.image"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Form from '@/components/Form.vue'
import Photo from '@/components/Photo.vue'

export default {
  name: 'home',
  components: {
    Header,
    Form,
    Photo
  },
  data() {
    return {
      photos: null
    }
  },
  methods: {
    filterPhotos(photos) {
      this.photos = photos
    }
  }
}
</script>

<style>
.home {
  min-height: 90vh;
  overflow-y: scroll;
}
.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
