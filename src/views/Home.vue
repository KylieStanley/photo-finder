<template>
  <div class="home">
    <Header />
    <Form @searched="filterPhotos" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'home',
  components: {
    Header,
    Form
  },
  data() {
    return {
      photos: []
    }
  },
  methods: {
    filterPhotos(photo) {
      this.photos.push(photo)
    }
  }
}
</script>
