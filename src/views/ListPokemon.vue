<template>
  <div class="list-pokemon">
    <div class="list-pokemon__content">
      <v-row class="d-flex justify-center align-center">
        <v-col cols="11">
          <v-text-field
            class="mx-10 list-pokemon__btn-search"
            v-model="searchTerm"
            label="Search Pokemon"
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn @click="loadPokemonById" color="accent" elevation="24" icon>
            <v-icon> mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <div v-if="pokemonHistory !== []" class="mx-10 my-5">
        <div class="d-flex align-center flex-row justify-space-between">
          <p>Search History</p>
          <v-btn @click="resetHistory" color="accent" elevation="24" icon>
            <v-icon> mdi-trash-can-outline</v-icon>
          </v-btn>
        </div>
        <v-row>
          <template v-for="(pokemon, index) in pokemonHistory">
            <v-col :key="index" cols="12" sm="6" md="4" lg="4">
              <pkm-card :pkmId="pokemon.id" :name="pokemon.name" />
            </v-col>
          </template>
        </v-row>
      </div>

      <div class="mx-10 my-5 list-pokemon__list">
        <p>List</p>
        <v-row>
          <template v-for="(pokemon, index) in filteredPokemon">
            <v-col :key="index" cols="12" sm="6" md="4" lg="4">
              <pkm-card :pkmId="index + 1" :name="pokemon.name" />
            </v-col>
          </template>
          <div id="scroll-trigger" ref="infinitescrolltrigger">
            <i class="fas fa-spinner fa-spin"></i>
          </div>
        </v-row>
      </div>
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
      pokemonHistory: [],
      filteredPokemon: [],
      searchTerm: "",
      nextUrl: "",
      currentUrl: 0,
    };
  },
  created() {
    this.loadPokemonList();
    this.loadHistory();
  },
  mounted() {
    this.scrollTrigger();
  },
  methods: {
    async loadPokemonList() {
      await apiPKM.getPokemon().then(({ data }) => {
        console.log("DATA =>", data);
        this.nextUrl = data.next;
        this.filteredPokemon = data.results;
      });
    },
    loadHistory() {
      if (localStorage.getItem("search-history")) {
        let pokemonStorage = localStorage.getItem("search-history");
        this.pokemonHistory = JSON.parse(pokemonStorage);
      } else {
        this.pokemonHistory = [];
      }
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
    async loadPokemonById() {
      if (this.searchvalue !== "")
        await apiPKM.getPokemonById(this.searchTerm).then(({ data }) => {
          this.pokemonHistory.push(data);
          localStorage.setItem(
            "search-history",
            JSON.stringify(this.pokemonHistory)
          );
          this.redirect(`pokemon/${this.searchTerm}`);
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
    resetHistory() {
      this.pokemonHistory = [];
      localStorage.clear();
    },
    redirect(path) {
      this.$router.push(`/${path}`);
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
  max-width: 95%;
}
</style>
