<template lang="pug">
  .navbar(
    :class="{ 'transparent-background': isOnTopPage }"
  )
    .navbar__logo
      img.navbar__logo--image(
        width="120",
        height="80",
        src="../static/images/deer.svg"
      )
      span.navbar__logo--text Happy New Year

    nav.navbar__menu
      template(v-for="item in navMenuItems")
        router-link.navbar__menu--item(
          :to="{ name: item.name }"
        )
          span {{ item.title }}
</template>

<script>

const navMenuItems = [
  {
    name: 'products',
    title: 'Gifts list',
  },
  {
    name: 'contacts',
    title: 'About us',
  },
  {
    name: 'cart',
    title: 'Cart',
  },
  {
    name: 'login',
    title: 'Log In',
  },
]


export default {
  name: "NavBar",
  data() {
    return {
      scrollTopPosition: 0,
      navMenuItems,
    }
  },
  created() {
    window.addEventListener('scroll', this.getScrollPosition)
  },
  computed: {
    isOnTopPage() {
      return this.scrollTopPosition < 40;
    }
  },
  methods: {
    getScrollPosition() {
      this.scrollTopPosition = window.scrollY
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getScrollPosition)
  }
}
</script>

<style lang="scss">
@import 'src/static/styles/variables.scss';
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

div.transparent-background {
  background-color: transparent;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: $color-red;
  transition: 0.35s all cubic-bezier(0.65, 0.05, 0.36, 1);

  &__logo {
    margin-left: -12px;
    display: flex;

    &--text {
      margin-top: 14px;
      margin-left: -18px;
      color: $color-white;
      font-size: 42px;
      font-family: 'Satisfy', cursive;
    }
  }

  &__menu {
    display: flex;
    align-items: center;

    &--item {
      margin-right: 32px;
      color: $color-white;
      font-size: 24px;
    }
  }
}
</style>
