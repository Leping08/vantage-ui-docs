<template>
  <div class="mx-4">
    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Installation
    </div>
    <pre v-highlightjs class="overflow-hidden">
      <code class="shell rounded-lg shadow-lg">$ npm install vantage-ui</code>
    </pre>

    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Usage
    </div>
    <div class="text-gray-500">
      Just use the VantageUi like any other Vue3 plugin.
    </div>
    <pre v-highlightjs class="">
      <code class="javascript rounded-lg shadow-lg">import VantageUi from "vantage-ui"

app.use(VantageUi)</code>
    </pre>

    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Theme
    </div>
    <div class="text-gray-500">
      Aspects of the Vantage UI components theme can be changed including the
      color, shadow and the shape of the corners of things like buttons and
      cards.
      <!-- TODO Add default theme to docs -->
    </div>
    <pre v-highlightjs class="overflow-hidden">
      <code class="javascript rounded-lg shadow-lg">import VantageUi from "vantage-ui"

app.use(VantageUi, {
  color: "purple",
  shadow: "shadow-lg",
  rounded: "rounded-lg"
})</code>
    </pre>

    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Single Component
    </div>
    <div class="text-gray-500">
      Every Vantage UI component can be individually imported.
    </div>
    <pre v-highlightjs class="">
      <code class="html rounded-lg shadow-lg">{{ jsCode }}</code>
      <code class="html rounded-lg shadow-lg">{{ htmlCode }}</code>
    </pre>

    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Purge CSS
    </div>
    <div class="text-gray-500">
      Vantage UI uses Tailwind CSS for its components so we recommend using
      Purge CSS to remove unused css for production builds.
    </div>

    <div class="text-lg text-gray-700 leading-relaxed font-medium mt-6">
      Content Files
    </div>
    <div class="text-gray-500">
      If you are using the whole component library we suggest including the
      Vantage UI node modules directory in the Purge content array. That will
      prevent Purge from removing any css that is used by Vantage UI but not
      used in your application.
    </div>
    <pre v-highlightjs class="">
      <code class="javascript rounded-lg shadow-lg">{{ purgeContent }}</code>
    </pre>
    <div class="text-gray-500">
      If you are only importing select component then specify the components
      being used.
    </div>
    <pre v-highlightjs class="">
      <code class="javascript rounded-lg shadow-lg">{{ purgeSingleComponent }}</code>
    </pre>

    <div class="text-lg text-gray-700 leading-relaxed font-medium">
      Whitelist
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    computed: {
      htmlCode() {return`<template>
  <v-button 
    color="blue"
  >
    Submit
  </v-button>
<\/template>`},
      jsCode() {return`<script>
import { VButton } from "vantage-ui"

export default {
  components: {
    "v-button": VButton
  }
}
<\/script>`
      },
      purgeContent() {
      return `
purge: {
  options: {
    whitelist: []
  },
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./node_modules/vantage-ui/src/lib-components/**/*.vue",
    "./node_modules/vantage-ui/src/lib-components/**/*.js"
  ]
}

`
      },
      purgeSingleComponent() {
        return`
purge: {
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
}

`
      }
    }
  }
</script>