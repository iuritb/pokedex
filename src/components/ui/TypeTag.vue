<template>
  <v-chip text-color="white" :class="name">
    <b>{{ name }}</b>
  </v-chip>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">

.grass {
  background: rgb(3, 139, 44) !important;
}
.poison {
  background: rgb(74, 7, 105) !important;
}
.water {
  background: rgb(8, 135, 219) !important;
}
.dragon {
  background: rgb(27, 2, 68) !important;
}
.ice {
  background: rgb(78, 199, 255) !important;
}
.flying {
  background: rgb(145, 215, 255) !important;
}
.fire {
  background: rgb(238, 135, 17) !important;
}
.ghost {
  background: rgb(74, 52, 87) !important;
}
.fighting {
  background: rgb(122, 0, 0) !important;
}
.normal {
  background: rgb(104, 104, 104) !important;
}
.psychic {
  background: rgb(195, 0, 255) !important;
}
.bug {
  background: rgb(52, 87, 6) !important;
}
.dark {
  background: rgb(43, 43, 43) !important;
}
.steel {
  background: rgb(116, 116, 116) !important;
}
.fairy {
  background: rgb(248, 165, 237) !important;
}
.eletric {
  background: rgb(255, 217, 1) !important;
}
.rock {
  background: rgb(88, 95, 100) !important;
}
.ground {
  background: rgb(92, 70, 70) !important;
}
</style>
