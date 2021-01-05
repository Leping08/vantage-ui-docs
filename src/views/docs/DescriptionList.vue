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
            <v-input
              class="flex-1 mr-2 my-2"
              v-model="item.key"
              name="key"
            ></v-input>
            <v-input
              class="flex-1 ml-2 my-2"
              v-model="item.value"
              name="value"
            ></v-input>
            <v-button
              class="ml-4"
              color="red"
              size="sm"
              :outline="true"
              @click="removeItem(index)"
            >
              <svg class="h-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            </v-button>
          </div>
          <v-button class="my-2" size="sm" :outline="true" @click="addItem()">
            <svg class="h-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
            </svg>
          </v-button>
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