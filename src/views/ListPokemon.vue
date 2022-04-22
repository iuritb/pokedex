<template>
  <div class="list-pokemon">
    <div class="list-pokemon__content">
      <v-text-field
        class="list-pokemon__btn-search"
        :v-model="searchTerm"
        label="Search Pokemon"
      ></v-text-field>
      <div class="mx-10 list-pokemon__list">
        <v-row>
          <template v-for="(pokemon, index) in filteredPokemon">
            <v-col :key="index" cols="12" sm="6" md="4" lg="4">
              <pkm-card :pkmId="index + 1" :name="pokemon.name" />
            </v-col>
          </template>
        </v-row>
      </div>
      <!-- <v-btn @click="nextPokemon"> </v-btn> -->
      <div id="scroll-trigger" ref="infinitescrolltrigger"></div>
    </div>
  </div>
</template>

<script>
//API
import apiPKM from "@/services/api";

//COMPONENTS
import PkmCard from "@/components/ui/PkmCard.vue";

export default {
  components: {
    PkmCard,
  },
  data() {
    return {
      pokemon: [],
      filteredPokemon: [],
      searchTerm: "",
      nextUrl: "",
      currentUrl: 0,
    };
  },
  created() {
    this.loadPokemonList();
  },
  mounted() {
    this.scrollTrigger();
  },
  methods: {
    async loadPokemonList() {
      await apiPKM.getPokemon().then(({ data }) => {
        console.log("DATA =>", data);
        this.filteredPokemon = data.results;
      });
    },
    async nextPokemon() {
      this.currentUrl += 24;
      await apiPKM.getNextPokemon(this.currentUrl).then(({ data }) => {
        this.nextUrl = data.next;
        data.results.forEach((pokemon) => {
          pokemon.id = pokemon.url
            .split("/")
            .filter(function (part) {
              return !!part;
            })
            .pop();
          this.filteredPokemon.push(pokemon);
        });
      });
    },
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0 && this.nextUrl) {
            this.nextPokemon();
          }
        });
      });

      observer.observe(this.$refs.infinitescrolltrigger);
    },
  },
};
</script>

<style lang="scss">
#scroll-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 2rem;
  color: #efefef;
}
.list-pokemon {
  &__list {
    max-width: 95%;
  }
}
</style>
