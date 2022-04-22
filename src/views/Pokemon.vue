<template>
  <div>
    <div class="mx-16 d-flex align-center justify-center flex-row flex-wrap">
      <figure>
        <img
          width="100%"
          :src="pokemon.sprite"
          alt="Placeholder
      image"
        />
      </figure>
      <div>
        <p>#{{ pokemon.id }}</p>
        <h2>{{ pokemon.name }}</h2>
        <v-row>
          <template v-for="(type, index) in pokemon.types">
            <v-col :key="index">
              <type-tag :name="type.type.name" />
            </v-col>
          </template>
        </v-row>
        <div>
          <div>
            <h3>Abilities:</h3>
            <template v-for="(abilitie, index) in pokemon.abilities">
              <p :key="index">{{ abilitie.ability.name }}</p>
            </template>
          </div>
        </div>
        <h3>Stats:</h3>
        <div
          class="ma-16 d-flex align-center justify-center flex-row flex-wrap"
        >
          <template v-for="(stat, index) in pokemon.stats">
            <div :key="index">
              <div class="d-flex flex-row col-sm-6 col-6">
                <h4>{{ stat.stat.name }}:</h4>
                <p>{{ stat.base_stat }}</p>
              </div>
            </div>
          </template>
        </div>
        <!-- <div class="d-flex align-center justify-center flex-column"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
//API
import apiPKM from "@/services/api";

//COMPONENTS
import TypeTag from "@/components/ui/TypeTag.vue";

export default {
  components: {
    TypeTag,
  },
  data() {
    return {
      pkmId: undefined,
      pokemon: {
        id: "",
        name: "",
        sprite: "",
        types: [],
        abilities: [],
        location_area: [],
        stats: [],
      },
    };
  },
  created() {
    this.pkmId = this.$route.params.id;
  },
  mounted() {
    this.loadPokemon(this.pkmId);
  },
  methods: {
    async loadPokemon(pkmId) {
      await apiPKM.getPokemonById(pkmId).then(({ data }) => {
        console.log("pokemon =>", data);
        this.pokemon.id = data.id;
        this.pokemon.name = data.name;
        this.pokemon.sprite = data.sprites.other.home.front_default;
        this.pokemon.types = data.types;
        this.pokemon.abilities = data.abilities;
        this.pokemon.location_area = data.location_area_encounters;
        this.pokemon.stats = data.stats;
      });
    },
  },
};
</script>