<template>
  <div>
    <Nav>
      <router-view />
    </Nav>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  components: {
    Nav
  },
  data() {
    return {};
  }
};
</script>
