import vue from "vue";
import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.VUE_APP_API,
});

let apiPKM = {
  getPokemons: () => {
      return apiRequest.get('/pokemon?limit=150', )
  },
};
