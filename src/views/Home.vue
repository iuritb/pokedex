<template>
  <v-row class="mx-16 mt-16 mb-0 d-flex align-center justify-center home">
    <v-col class="pt-16 d-flex flex-column align-end home__content" cols="7">
      <h2 class="home__title">Pokedex</h2>
      <p class="my-16 home__text">
        Use the Advanced Search to explore Pokémon world!!!
        <br />
        Search for a Pokémon by name and learn more about it.
      </p>
      <v-btn @click="redirect('/list-pokemon')" class="home__btn-search"
        >Search Pokemon</v-btn
      >
    </v-col>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-col class="home__carousel" cols="5">
        <v-carousel
          class="d-flex align-end justify-start"
          cycle
          height="250"
          :show-arrows="false"
          hide-delimiters
        >
          <v-carousel-item v-for="(pokemon, index) in pokemons" :key="index">
            <img class="mb-5" :src="loadAsset(pokemon.path)" />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      pokemons: [
        { path: "venusaur.png" },
        { path: "charizard.png" },
        { path: "blastoise.png" },
      ],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  methods: {
    loadAsset(path) {
      return require(`../assets/img/pokemon/${path}`);
    },
    redirect(path) {
      this.$router.push(`${path}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>