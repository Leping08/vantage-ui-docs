<template>
  <v-card
    id="date-range-picker"
    heading="Date Range Picker"
    :padding="true"
    :border="true"
    class="m-4"
  >
    <v-date-range-picker
      id="example"
      :color="color"
      :position="position"
      v-model:start="startDate"
      v-model:end="endDate"
    >
      Submit
    </v-date-range-picker>
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
    <dl class="">
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
  import { VDateRangePicker } from 'vantage-ui';
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
        color: 'cyan',
        position: 'left',
        startDate: null,
        endDate: null
      }
    },
    created() {
      this.component = VDateRangePicker;
    },
    computed: {
      code() {return`
<v-date-range-selector 
  v-model:start="${this.startDate}"
  v-model:end="${this.endDate}"
  color="${this.color}"
  position="${this.position}"
/>
      `}
    }
  }
</script>