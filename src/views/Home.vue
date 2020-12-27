<template>
  <div class="">
    Welcome to Vantage UI
  </div>

  <div>
    <v-date-range-picker
      v-model:start="start"
      v-model:end="end"
      color="orange"
    ></v-date-range-picker>
  </div>

  <div>
    <router-link :to="{ name: 'card' }">Go to Card</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      start: null,
      end: null
    };
  }
};
</script>
