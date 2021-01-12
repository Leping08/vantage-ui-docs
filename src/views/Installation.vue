<template>
  <div class="mx-4">
    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Installation
    </div>
    <div class="pt-4 pb-8">
      <code-editor
        language="javascript"
        :code="install"
        :copy="true"
        :heading="true"
      />
    </div>

    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Usage
    </div>
    <div class="pt-4 pb-8">
      <code-editor
        language="javascript"
        :code="usage"
        :copy="true"
        :heading="true"
      />
    </div>

    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Theme
    </div>
    <div class="text-gray-500">
      Aspects of Vantage components can be changed through the theme object
      including the color, shadow, and how rounded the corners some components
      are. These follow the Tailwind CSS classes for
      <a
        target="_blank"
        href="https://tailwindcss.com/docs/customizing-colors#color-palette-reference"
        class="text-cyan-600"
        >colors</a
      >,
      <a
        target="_blank"
        href="https://tailwindcss.com/docs/box-shadow"
        class="text-cyan-600"
        >box shadows</a
      >, and
      <a
        target="_blank"
        href="https://tailwindcss.com/docs/border-radius#rounded-corners"
        class="text-cyan-600"
        >rounded corners</a
      >.
      <!-- TODO Add default theme to docs -->
    </div>
    <div class="pt-4 pb-8">
      <code-editor
        language="javascript"
        :code="theme"
        :copy="true"
        :heading="true"
      />
    </div>

    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Single Component
    </div>
    <div class="text-gray-500">
      Every Vantage component can be individually imported.
    </div>
    <div class="pt-4 pb-8">
      <code-editor
        language="html"
        :code="importExample"
        :copy="true"
        :heading="true"
      />
    </div>

    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Purge CSS
    </div>
    <div class="text-gray-500">
      Vantage uses Tailwind CSS for its components so we recommend using Purge
      CSS to remove unused css for production builds.
    </div>

    <div class="text-lg text-gray-700 leading-relaxed font-medium mt-6">
      Content Files
    </div>
    <div class="text-gray-500">
      If you are using the whole component library we suggest including the
      Vantage node modules directory in the Purge CSS content array. That will
      prevent Purge CSS from removing any css that is used by Vantage.
    </div>
    <div class="pt-4 pb-8">
      <code-editor
        language="javascript"
        :code="purgeContent"
        :copy="true"
        :heading="true"
      />
    </div>
    <div class="text-gray-500">
      If you are only importing individual components and not using the whole
      library then specify the components being used in the content array. This
      will make sure Purge CSS will include the css for only those components
      but not the rest of the library.
    </div>
    <div class="pt-4 pb-8">
      <code-editor
        language="javascript"
        :code="purgeSingleComponent"
        :copy="true"
        :heading="true"
      />
    </div>

    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Whitelist
    </div>
    <div class="text-gray-500">
      Vantage components use dynamic color classes in components exposing the
      whole tailwind color pallet for use. In order to make sure Purge CSS does
      not remove the colors you are using in Vantage components you can add them
      to the whitelist like so.
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import CodeEditor from '@/components/CodeEditor.vue';
  export default {
    components: {
      CodeEditor
    },
    computed: {
      install() {return `npm install vantage-ui`},
      usage() {return `import VantageUi from "vantage-ui"

app.use(VantageUi)`},
      theme() {return `import VantageUi from "vantage-ui"

app.use(VantageUi, {
  color: "purple",
  shadow: "shadow-lg",
  rounded: "rounded-lg"
})`},
      importExample() {return`<template>
  <v-button 
    color="blue"
  >
    Submit
  </v-button>
<\/template>

<script>
import { VButton } from "vantage-ui"
export default {
  components: {
    "v-button": VButton
  }
}
<\/script>`},
      purgeContent() {
      return `purge: {
  options: {
    whitelist: []
  },
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./node_modules/vantage-ui/src/lib-components/**/*.vue",
    "./node_modules/vantage-ui/src/lib-components/**/*.js"
  ]
}`},
      purgeSingleComponent() {
        return`purge: {
  options: {
    whitelist: []
  },
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./node_modules/vantage-ui/src/lib-components/form/button.vue",
    "./node_modules/vantage-ui/src/lib-components/form/input.vue",
    "./node_modules/vantage-ui/src/lib-components/badge.vue",
    "./node_modules/vantage-ui/src/lib-components/ping.vue"
  ]
}`}
    }
  }
</script>