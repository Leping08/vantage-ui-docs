<template>
  <v-card
    id="progress-bar"
    heading="Progress Bar"
    :padding="true"
    :border="true"
    class="m-4"
  >
    <v-progress-bar
      id="example"
      :color="color"
      v-model="percent"
      :height="height"
      :rounded="rounded"
    />
  </v-card>

  <v-card id="code" heading="Code" :padding="true" :border="true" class="m-4">
    <pre
      v-highlightjs
      class="overflow-hidden"
    ><code class="html rounded-lg shadow-lg">{{ code }}</code></pre>
  </v-card>

  <v-card
    id="tinker"
    heading="Tinker"
    :padding="false"
    :border="true"
    class="m-4 overflow-visible"
  >
    <dl>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          V-Model
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input type="number" v-model="percent"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50 rounded-b-lg overflow-visible"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Color
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <color-select v-model="color" />
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white rounded-b-lg"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Rounded
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <rounded-select v-model="rounded" />
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50 rounded-b-lg overflow-visible"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Height
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input type="number" v-model="height" />
        </dd>
      </div>
    </dl>
  </v-card>

  <v-card
    id="props"
    heading="Props"
    :padding="false"
    :border="true"
    class="m-4"
  >
    <component-props-table :component="component"></component-props-table>
  </v-card>
</template>

<script>
/* eslint-disable */
  import { VProgressBar } from 'vantage-ui';
  import ComponentPropsTable from '@/components/ComponentPropsTable.vue';
  import ColorSelect from '@/components/ColorSelect.vue';
  import RoundedSelect from '@/components/RoundedSelect.vue';
  export default {
    components: {
      ComponentPropsTable,
      ColorSelect,
      RoundedSelect
    },
    data() {
      return {
        component: null,
        percent: 75,
        color: 'cyan',
        rounded: 'rounded-full',
        height: 4
      }
    },
    created() {
      this.component = VProgressBar;
    },
    computed: {
      code() {return`
<v-progress-bar 
  v-model="${this.percent}"
  color="${this.color}"
  rounded="${this.rounded}"
  height="${this.height}"
/>
      `}
    }
  }
</script>