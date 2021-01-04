<template>
  <div class="relative mx-6">
    <div
      v-if="heading"
      class="absolute z-50 mt-9 w-full h-6 border-b border-blueGray-600 rounded-t"
    >
      <div class="flex-none flex items-center px-4">
        <div class="flex space-x-1.5">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-amber-400"></div>
          <div class="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
      </div>
    </div>
    <div
      v-if="copy"
      :class="[
        `absolute top-0 right-0 mr-6`,
        copy && heading ? 'mt-20' : 'mt-12'
      ]"
    >
      <svg
        class="w-6 text-blueGray-400 hover:text-blueGray-500 cursor-pointer"
        viewBox="0 0 24 24"
        @click="copyCode()"
      >
        <path
          fill="currentColor"
          d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
        />
      </svg>
    </div>
    <pre v-highlightjs class="overflow-hidden">
      <code :class="[`${language} rounded-lg shadow-lg py-4`, heading ? 'pt-12' : '']" id="code">{{ code }}</code>
    </pre>
    <textarea
      class="opacity-0 pointer-events-none h-0 w-0 -ml-40"
      ref="codeTextarea"
      v-model="codeToCopy"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: Boolean,
      required: false,
      default: false
    },
    code: {
      type: String,
      required: true
    },
    copy: {
      type: Boolean,
      required: false,
      default: false
    },
    language: {
      type: String,
      required: false,
      default: "html"
    }
  },
  data() {
    return {
      codeToCopy: null
    };
  },
  methods: {
    copyCode() {
      this.$refs.codeTextarea.select();
      document.execCommand("copy");
    }
  },
  watch: {
    code() {
      this.codeToCopy = this.code;
    }
  }
};
</script>
