<template>
  <v-card id="Ping" heading="Ping" :padding="true" :border="true" class="m-4">
    <v-tabs v-model="tabId" :color="color">
      <v-tab :tabId="1">First tab</v-tab>
      <v-tab :tabId="2">Second tab</v-tab>
      <v-tab :tabId="3">Third tab</v-tab>

      <v-tab-content :tabId="1">First content</v-tab-content>
      <v-tab-content :tabId="2">Second content</v-tab-content>
      <v-tab-content :tabId="3">Third content</v-tab-content>
    </v-tabs>
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
          <v-input type="number" v-model="tabId" />
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50 rounded-b-lg"
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
    id="v-tabs Props"
    heading="v-tabs"
    :padding="false"
    :border="true"
    class="m-4"
  >
    <component-props-table :component="VTabs"></component-props-table>
  </v-card>

  <v-card
    id="v-tab Props"
    heading="v-tab"
    :padding="false"
    :border="true"
    class="m-4"
  >
    <component-props-table :component="VTab"></component-props-table>
  </v-card>

  <v-card
    id="v-tab-content"
    heading="v-tab-content"
    :padding="false"
    :border="true"
    class="m-4"
  >
    <component-props-table :component="VTabContent"></component-props-table>
  </v-card>
</template>

<script>
/* eslint-disable */
  import { VTabs, VTab, VTabContent } from 'vantage-ui';
  import ComponentPropsTable from '@/components/ComponentPropsTable.vue';
  import ColorSelect from '@/components/ColorSelect.vue';
  export default {
    components: {
      ComponentPropsTable,
      ColorSelect
    },
    data() {
      return {
        VTabs: null,
        VTab: null,
        VTabContent: null,
        color: 'cyan',
        tabId: 1,
      }
    },
    created() {
      this.VTabs = VTabs;
      this.VTabContent = VTabContent;
      this.VTab = VTab;
    },
    computed: {
      code() {return`
<v-tabs v-model="${this.tabId}">
  <v-tab :tabId="1">First tab</v-tab>
  <v-tab :tabId="2">Second tab</v-tab>
  <v-tab :tabId="3">Third tab</v-tab>

  <v-tab-content :tabId="1">First content</v-tab-content>
  <v-tab-content :tabId="2">Second content</v-tab-content>
  <v-tab-content :tabId="3">Third content</v-tab-content>
</v-tabs>
      `}
    }
  }
</script>