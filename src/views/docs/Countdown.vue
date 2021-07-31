<template>
  <v-card
    id="countdown"
    heading="Countdown"
    :padding="true"
    :border="true"
    class="m-4"
  >
    <v-countdown :color="color" :time="time" :expiredMessage="expiredMessage" />
  </v-card>

  <v-card id="code" heading="Code" :padding="true" :border="true" class="m-4">
    <code-editor language="html" :code="code" :copy="true" :heading="true" />
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
          Time
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input type="date" v-model="time"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
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
          Expired Message
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="expiredMessage"></v-input>
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
  import { VCountdown } from 'vantage-ui';
  import ComponentPropsTable from '@/components/ComponentPropsTable.vue';
  import ColorSelect from '@/components/ColorSelect.vue';
  import CodeEditor from '@/components/CodeEditor.vue';
  export default {
    components: {
      ComponentPropsTable,
      ColorSelect,
      CodeEditor
    },
    data() {
      return {
        time: null,
        color: 'cyan',
        expiredMessage: 'Expired'
      }
    },
    created() {
      this.component = VCountdown;
      let date = new Date(new Date().getUTCFullYear() + 1, 1, 1)
      this.time = date.getFullYear() + '-' + (date.getMonth() > 10 ? (date.getMonth()+1) : '0' + (date.getMonth()+1)) + '-' + (date.getDate() > 10 ? (date.getDate()) : '0' + date.getDate())
    },
    computed: {
      code() {return`<v-countdown 
  time="${this.time}"
  color="${this.color}"
  expiredMessage="${this.expiredMessage}"
/>`.replace(/(^[ \t]*\n)/gm, "")}
    }
  }
</script>