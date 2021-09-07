<template>
  <div>
    <formulario></formulario>
    <v-divider></v-divider>
    <br />
    <main-data></main-data>
  </div>
</template>

<script>
import Formulario from '../components/Formulario.vue'
import MainData from '../components/MainData.vue'
export default {
  name: 'Home',

  components: {
    Formulario,
    MainData
  }
}
</script>
