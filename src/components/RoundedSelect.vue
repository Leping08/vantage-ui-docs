<template>
  <v-search-select
    v-model="value"
    :items="roundedOptions"
    placeholder="Select Shape"
  />
</template>

<script>
export default {
  name: "Rounded Select",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      roundedOptions: [
        "rounded-none",
        "rounded-sm",
        "rounded",
        "rounded-md",
        "rounded-lg",
        "rounded-xl",
        "rounded-2xl",
        "rounded-3xl",
        "rounded-full"
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
