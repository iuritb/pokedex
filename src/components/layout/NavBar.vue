<template>
  <div>
    <nav class="header">
      <div class="header__title">
        <h1 class="header__pokedex">PokeDex</h1>
        <side-bar class="header__sidebar" />
      </div>
      <div class="header__navigation">
        <router-link class="header__text" to="/">Home</router-link>
        <div class="header__navigation-separator"></div>
        <router-link class="header__text" to="/list-pokemon"
          >List Pokemon</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";

export default {
  components: {
    SideBar,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .header {
    margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
    }
    &__pokedex {
      font-weight: 500;
      font-size: 20px;
      line-height: 26px;
      color: #ffffff;
    }
    &__sidebar {
      align-self: center;
    }
    &__navigation {
      display: none;
    }
  }
}

@media only screen and (min-width: 600px) {
  .header {
    margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &__sidebar {
      display: none;
    }
    &__pokedex {
      font-weight: 500;
      font-size: 20px;
      line-height: 26px;
      color: #ffffff;
    }
    &__navigation {
      padding: 0 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    &__text {
      text-decoration: none;
      font-weight: 500;
      line-height: 1.25rem;
      align-items: center;
      text-align: center;
      color: #fff;
    }
    &__text:hover {
      font-weight: 700;
      cursor: pointer;
    }

    &__navigation-separator {
      margin: 0 4.375rem 0 4.375rem;
      align-self: center;
      height: 1px;
      width: 1.875rem;
      transform: rotate(-89.98deg);
      background: #fff;
    }
  }
}
</style>