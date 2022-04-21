<template>
  <div class="sidebar">
    <span class="sidebar__menu">
      <img
        @click="toggle"
        src="../../assets/icons/menu-icon.svg"
        alt="chevron-right icon"
      />
    </span>
    <div class="slidein" :class="open ? 'open' : ''">
      <div class="sidebar__header">
        <div class="sidebar__title"><p>PokeDex</p></div>
        <span class="sidebar__close" @click="toggle">
          <icon-close color="#fff" :height="29" :width="18" />
        </span>
      </div>
      <div class="sidebar__content">
        <div class="sidebar__group">
          <icon-home
            class="sidebar__icon"
            color="#fff"
            :height="29"
            :width="29"
          />
          <router-link @click="toggle" class="sidebar__text" to="/">
            <span @click="toggle"> Home </span>
          </router-link>
        </div>
        <div class="sidebar__separator"></div>
        <div class="sidebar__group">
          <icon-list
            class="sidebar__icon"
            color="#fff"
            :height="29"
            :width="29"
          />
          <router-link class="sidebar__text" to="/list-pokemon">
            <span @click="toggle"> List Pokemon </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from "../icons/IconClose.vue";
import IconHome from "../icons/IconHome.vue";
import IconList from "../icons/IconList.vue";

export default {
  components: {
    IconClose,
    IconHome,
    IconList,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
      console.log("opened => ", this.open);
    },
  },
};
</script>

<style lang="scss" scoped>
.slidein {
  position: fixed;
  z-index: 100;
  top: 0;
  right: -100%;
  background: #000;
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}
.open {
  right: 0;
  width: 100%;
}

.sidebar {
  &__menu {
    padding: 20px 0;
  }
  &__menu:hover {
    cursor: pointer;
  }
  &__header {
    margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #ffffff;
  }
  &__close:hover {
    cursor: pointer;
  }
  &__content {
    margin: 40px 20px;
    display: flex;
    flex-direction: column;
  }
  &__group {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &__text {
    margin: 0 0 0 1.875rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 25px;
    line-height: 33px;
    color: #fff;
  }
  &__separator {
    margin: 1.875rem 0 1.875rem 0;
    align-self: center;
    height: 1px;
    width: 16rem;
    background: #fff;
  }
}
</style>