<template lang="pug">
  .main
    .main__top-container
      nav-bar
    .main-content
      div kek cheburek
      div kek cheburek
      div kek cheburek
      div kek cheburek
    footer
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "MainRoot",
  components: {NavBar},
}
</script>

<style lang="scss">
.main {
  &__top-container {
    min-height: 100vh;
    background-image: url("../../static/images/landing-christmas.jpg");
    background-size: cover;
    background-position: 20%;
  }
}

</style>
