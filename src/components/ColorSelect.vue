<template>
  <v-search-select
    v-model="value"
    :items="colors"
    :color="color"
    placeholder="Select Color"
  >
    <template v-slot:default="{ item }">
      <div class="flex items-center">
        <div
          :class="
            `h-4 w-4 border-2 border-white rounded-full bg-${item}-600 mr-2`
          "
        ></div>
        <div :class="`hover:text-gray-800`">
          {{ item }}
        </div>
      </div>
    </template>
  </v-search-select>
</template>

<script>
export default {
  name: "Color Select",
  props: {
    modelValue: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      colors: [
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "lightBlue",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
        "red",
        "orange",
        "amber",
        "yellow",
        //"blueGray"
        //"coolGray",
        "gray"
        //"trueGray",
        //"warmGray",
      ]
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
</script>
