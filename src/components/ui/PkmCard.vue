<template>
  <v-card
    class="mx-auto card-pokemon"
    max-width="100%"
    height="150px"
    outlinedpx
    color="#121212"
  >
    <v-list-item three-line>
      <figure>
        <img
          width="150px"
          height="150px"
          :src="pokemon.sprite"
          alt="Placeholder image"
        />
      </figure>

      <v-list-item-content>
        <v-list-item-title class="card-pokemon__title">
          {{ name }}</v-list-item-title
        >
        <v-list-item-subtitle>
          <v-row>
            <template v-for="(type, index) in pokemon.types">
              <v-col :key="index">
                <type-tag :name="type.type.name" />
              </v-col>
            </template>
          </v-row>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
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
  props: {
    pkmId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pokemon: {
        sprite: "",
        types: [],
      },
    };
  },
  mounted() {
    this.loadPokemon(this.pkmId);
  },
  methods: {
    async loadPokemon(pkmId) {
      await apiPKM.getPokemonById(pkmId).then(({ data }) => {
        this.pokemon.types = data.types;
        this.pokemon.sprite = data.sprites.front_default;
      });
    },
  },
};
</script>

<style lang="scss">
.card-pokemon {
  border-radius: 4px;

  &__title {
    color: #fff;
    font-size: 12px;
    line-height: 24px;
    text-transform: uppercase;
    text-align: start;
  }
}
</style>

