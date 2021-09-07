<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="nombre" :rules="textoRules" label="Nombre" required></v-text-field>
    <v-text-field v-model="categoria" :rules="textoRules" label="Categoría" required></v-text-field>
    <v-text-field v-model="precio" type="number" :rules="numeroRules" label="Precio" required></v-text-field>
    <v-text-field v-model="cantidad" type="number" :rules="numeroRules" label="Cantidad" required></v-text-field>
    <v-textarea v-model="descripcion" :rules="textoRules" label="Descripcion" required></v-textarea>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="GuardarCambios"> Guardar </v-btn>
    <v-btn color="error" class="mr-4" @click="reset"> Borrar Formuario </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    nombre: '',
    categoria: '',
    precio: null,
    cantidad: null,
    descripcion: '',
    textoRules: [
      (v) => !!v || 'Este campo es requerido',
      (v) => (v && v.length > 5) || 'Debe contener al menos 5 caracteres'
    ],
    numeroRules: [(v) => !!v || 'Este campo es requerido', (v) => v > 0 || 'El valor debe ser mayor que cero']
  }),
  computed: {
    GetProductToEdit() {
      return this.$store.getters.GetProduct
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    GuardarCambios() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch('GuardarCambios', {
            nombre: this.nombre,
            categoria: this.categoria,
            precio: this.precio,
            cantidad: this.cantidad,
            descripcion: this.descripcion
          })
          .then((resp) => {
            console.log('Respuesta:', resp)
          })
          .then(() => {
            this.$store.dispatch('GetProductosAsync')
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
