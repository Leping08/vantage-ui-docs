<template>
  <v-card
    id="heading"
    heading="Heading"
    :padding="true"
    :border="true"
    class="m-4"
  >
    <v-stats
      id="example"
      :color="color"
      :heading="heading"
      :first-metric="firstMetric"
      :second-metric="secondMetric"
      :rounded="rounded"
      :shadow="shadow"
      class="sm:1/1 md:w-3/4 lg:w-1/2"
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
          Heading
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="heading"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          First Metric
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input type="number" v-model="firstMetric" />
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Second Metric
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input type="number" v-model="secondMetric" />
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Rounded
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="rounded" />
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Color
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <color-select v-model="color" />
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50 rounded-b-lg"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Shadow
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="shadow" />
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
  import { VStats } from 'vantage-ui';
  import ComponentPropsTable from '@/components/ComponentPropsTable.vue';
  import ColorSelect from '@/components/ColorSelect.vue';
  export default {
    components: {
      ComponentPropsTable,
      ColorSelect
    },
    data() {
      return {
        component: null,
        heading: 'Users',
        color: 'cyan',
        firstMetric: 578,
        secondMetric: 349,
        rounded: 'rounded-lg',
        color: 'cyan',
        shadow: 'shadow-lg'
      }
    },
    created() {
      this.component = VStats;
    },
    computed: {
      code() {return`
<v-stats 
  heading="${this.heading}"
  :first-metric="${this.firstMetric}"
  :second-metric="${this.secondMetric}"
  rounded="${this.rounded}"
  color="${this.color}"
  shadow="${this.shadow}"
/>
      `}
    }
  }
</script>