import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    dialog: false,
    product: {}
  },
  getters: {
    GetProducts(state) {
      return state.products
    },
    GetProduct(state) {
      return state.product
    }
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    },
    SET_PRODUCT(state, payload) {
      state.product = payload
    }
  },
  actions: {
    GetProductosAsync({ commit }) {
      return axios
        .get('https://localhost:44316/api/Producto')
        .then((data) => {
          commit('SET_PRODUCTS', data.data)
        })
        .catch((error) => {
          console.log({ error })
          return { error }
        })
    },
    GuardarCambios({ state }, payload) {
      return axios
        .post('https://localhost:44316/api/Producto', payload)
        .then((data) => {
          console.log(state.products)
          return data.data
        })
        .catch((error) => {
          console.log({ error })
          return { error }
        })
    },
    SetProduct({ commit }, payload) {
      commit('SET_PRODUCT', payload)
    }
  },
  modules: {}
})
