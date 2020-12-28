<template>
  <v-card
    id="description-list"
    heading="Description List"
    :padding="false"
    :border="true"
    class="m-4"
  >
    <v-description-list
      id="example"
      :items="items"
      :item-key="itemKey"
      :item-value="itemValue"
      :border="false"
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
          Item Key
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="itemKey"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Item Value
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="itemValue"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white rounded-b-lg"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Items
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <div
            class="flex items-center"
            v-for="(item, index) in items"
            :key="item"
          >
            <v-input class="flex-1 p-2" v-model="item.key" name="key"></v-input>
            <v-input
              class="flex-1 p-2"
              v-model="item.value"
              name="value"
            ></v-input>
            <v-button
              class="m-4"
              color="red"
              :outline="true"
              @click="removeItem(index)"
              >X</v-button
            >
          </div>
          <v-button class="ml-2" :outline="true" @click="addItem()">+</v-button>
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
  import { VDescriptionList } from 'vantage-ui';
  import ComponentPropsTable from '@/components/ComponentPropsTable.vue';
  export default {
    components: {
      ComponentPropsTable
    },
    data() {
      return {
        component: null,
        border: false,
        itemKey: 'key',
        itemValue: 'value',
        items: [
          {
            key: "Year",
            value: "2020"
          },
          {
            key: "Make",
            value:"Tesla"
          },
          {
            key: "Model",
            value:"Model 3"
          }
        ],
      }
    },
    created() {
      this.component = VDescriptionList;
    },
    computed: {
      code() {return`
<v-description-list
  :items="${JSON.stringify(this.items).replaceAll("\"", "'")}"
  itemKey="${this.itemKey}"
  itemValue="${this.itemValue}"
  :border="false"
/>
      `}
    },
    methods: {
      addItem() {
        this.items.push({"key": "", "value": ""});
      },
      removeItem(index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>