<template>
  <v-card
    id="search-select"
    heading="Search Select"
    :padding="true"
    :border="true"
    class="m-4"
  >
    <v-search-select
      v-model="value"
      :label="label"
      :placeholder="placeholder"
      :items="items"
      :color="color"
    />
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
          V-Model
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="value"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Label
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="label"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Placeholder
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="placeholder"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Items
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <div
            class="flex items-center"
            v-for="(item, index) in items"
            :key="index"
          >
            <v-input class="flex-1 py-2" v-model="items[index]" />
            <v-button
              class="mx-4"
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
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white rounded-b-lg"
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
  import { VSearchSelect } from 'vantage-ui';
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
        component: null,
        value: '',
        color: 'cyan',
        label: 'Javascript Frameworks',
        placeholder: 'Select Your Favorite',
        items: [
          "Vue",
          "React",
          "Angular"
        ]
      }
    },
    created() {
      this.component = VSearchSelect;
    },
    computed: {
      code() {return`<v-search-select 
  v-model="${this.value}"
  label="${this.label}"
  placeholder="${this.placeholder}"
  :items="${JSON.stringify(this.items).replaceAll("\"", "'")}"
  color="${this.color}"
/>`.replace(/(^[ \t]*\n)/gm, "")}
    },
    methods: {
      addItem() {
        this.items.push("");
      },
      removeItem(index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>