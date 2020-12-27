<template>
  <div class="relative">
    <div
      v-if="showDropdown"
      class="w-full h-screen fixed top-0 right-0"
      @click="showDropdown = !showDropdown"
    ></div>
    <v-input
      id="search"
      ref="search"
      class="w-1/2"
      v-model="text"
      placeholder="Search"
    ></v-input>
    <div
      v-if="showDropdown"
      class="bg-white border border-gray-300 absolute w-1/2 my-2 shadow rounded-lg z-20"
    >
      <div
        v-if="filteredComponents == 0"
        class="text-base leading-5 font-medium text-gray-400 p-2"
      >
        No results
      </div>
      <div v-for="component in filteredComponents" :key="component">
        <div
          class=" hover:bg-gray-200 p-2 border-b border-gray-200 cursor-pointer"
          @click="changeRoute(component)"
        >
          <div class="text-base leading-5 font-medium text-gray-700">
            {{ component.text }}
          </div>
          <!-- <div class="text-sm font-medium text-gray-500">
            Some more conntent
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from "@/router/index";
export default {
  data() {
    return {
      text: "",
      showDropdown: false,
      components: []
    };
  },
  created() {
    this.components = routes.filter(route => route.searchable);
    // window.addEventListener("keypress", e => {
    //   if (event.key === "/") {
    //     this.$refs.search.focus()
    //   }
    // });
  },
  computed: {
    filteredComponents() {
      return this.components.filter(item => {
        return item.name.toLowerCase().indexOf(this.text.toLowerCase()) > -1;
      });
    }
  },
  watch: {
    text() {
      if (this.text) {
        this.showDropdown = true;
      }
    }
  },
  methods: {
    changeRoute(component) {
      this.$router.push({ path: component.path });
      this.text = null;
      this.showDropdown = false;
    }
  }
};
</script>
