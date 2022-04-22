import vue from "vue";
import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.VUE_APP_API,
});

let apiPKM = {
  //list 150 first pokemon 
  getPokemon: () => {
    return apiRequest.get('/pokemon?limit=24',)
  },
  getNextPokemon: (nextOffSet) => {
    return apiRequest.get(`/pokemon?offset=${nextOffSet}&limit=24`)
  },
  //list pokemon by id
  getPokemonById: (pkmId) => {
    return apiRequest.get(`/pokemon/${pkmId}`)
  }
};

export default apiPKM;

