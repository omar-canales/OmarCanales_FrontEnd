<template>
  <div>
    <v-data-table
      item-key="productoId"
      multi-sort
      show-select
      fixed-header
      fixed-footer
      :headers="headers"
      :items="GetProductos"
      height="350"
      style="width: 100%"
      class="table ma-auto"
    >
      <template v-slot:[`item.nombre`]="{ item }" class="pa-0">
        <span class="caption text-uppercase">
          <v-btn text @click="EditarProducto(item)"> {{ item.nombre }}</v-btn>
        </span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true
  }),
  computed: {
    headers() {
      return [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Id', value: 'productoId', align: ' d-none' },
        { text: 'Categoria', value: 'categoria' },
        { text: 'Precio', value: 'precio' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: 'Descripción', value: 'descripcion' }
      ]
    },
    GetProductos() {
      return this.$store.getters.GetProducts
    }
  },
  methods: {
    EditarProducto(item) {
      this.$store.dispatch('SetProduct', item)
    }
  },
  mounted() {
    this.$store.dispatch('GetProductosAsync')
  }
}
</script>

<style scoped></style>
