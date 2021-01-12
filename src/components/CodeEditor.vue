<template>
  <div class="relative -my-6">
    <div
      v-if="heading"
      class="absolute mt-9 w-full h-6 border-b border-blueGray-600 rounded-t"
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
        `absolute top-0 right-0 mr-4`,
        copy && heading ? 'mt-16 pt-2' : 'mt-10'
      ]"
    >
      <div class="flex items-center">
        <transition
          enter-from-class="-translate-y-4 opacity-0"
          enter-active-class="transform transition ease-in-out duration-300"
          enter-to-class="translate-y-0 opacity-100"
          leave-from-class="translate-y-0 opacity-100"
          leave-active-class="transform transition ease-in-out duration-300"
          leave-to-class="-translate-y-4 opacity-0"
        >
          <div class="pr-4" v-if="checkBox">
            <svg class="w-6 text-green-500" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
              />
            </svg>
          </div>
        </transition>
        <div>
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
      </div>
    </div>
    <pre v-highlightjs class="overflow-hidden">
      <code :class="[`${language} rounded-lg shadow py-4 -mb-10`, heading ? 'pt-12' : '']" id="code">{{ code }}</code>
    </pre>
    <textarea
      class="opacity-0 pointer-events-none h-0 w-0"
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
      codeToCopy: null,
      checkBox: false
    };
  },
  methods: {
    copyCode() {
      this.$refs.codeTextarea.select();
      document.execCommand("copy");
      this.checkBox = true;
      setTimeout(() => {
        this.checkBox = false;
      }, 3000);
    }
  },
  created() {
    this.codeToCopy = this.code;
  },
  watch: {
    code() {
      this.codeToCopy = this.code;
    }
  }
};
</script>
