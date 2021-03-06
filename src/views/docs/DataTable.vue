<template>
  <v-card
    id="data-table"
    heading="Data Table"
    :padding="true"
    :border="true"
    class="m-4"
  >
    <v-data-table
      :items="items"
      :search="search"
      :title="title"
      :header="header"
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
          Title
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="title" />
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Search
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-toggle v-model="search" />
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white rounded-b-lg"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Header
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <div
            class="flex items-center"
            v-for="(object, index) in header"
            :key="object"
          >
            <v-input
              class="flex-1 p-2"
              v-model="object.text"
              :name="index"
              label="Text"
            ></v-input>
            <v-input
              class="flex-1 p-2"
              v-model="object.sortable"
              :name="index"
              label="Sortable"
            ></v-input>
            <v-input
              class="flex-1 p-2"
              v-model="object.direction"
              :name="index"
              label="Direction"
            ></v-input>
            <v-input
              class="flex-1 p-2"
              v-model="object.value"
              :name="index"
              label="Value"
            ></v-input>
            <v-button
              class="mx-2 mt-6"
              color="red"
              size="sm"
              :outline="true"
              @click="removeHeader(index)"
            >
              <svg class="h-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            </v-button>
          </div>
          <v-button class="m-2" size="sm" :outline="true" @click="addHeader()">
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
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50 rounded-b-lg"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Items
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <div
            class="flex items-center"
            v-for="(object, index) in items"
            :key="object"
          >
            <v-input
              class="flex-1 p-2"
              v-model="object.title"
              :name="index"
              label="Title"
            ></v-input>
            <v-input
              class="flex-1 p-2"
              v-model="object.name"
              :name="index"
              label="Name"
            ></v-input>
            <v-input
              class="flex-1 p-2"
              v-model="object.price"
              :name="index"
              label="Price"
            ></v-input>
            <v-button
              class="mx-2 mt-6"
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
          <v-button class="m-2" size="sm" :outline="true" @click="addItem()">
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
  import { VDataTable } from 'vantage-ui';
  import ComponentPropsTable from '@/components/ComponentPropsTable.vue';
  import CodeEditor from '@/components/CodeEditor.vue';
  export default {
    components: {
      ComponentPropsTable,
      CodeEditor
    },
    data() {
      return {
        component: null,
        search: true,
        title: "Development Courses",
        header: [
          {
            text: "Title",
            sortable: true,
            direction: "asc",
            value: "title"
          },
          {
            text: "Instructor",
            sortable: false,
            direction: "asc",
            value: "name"
          },
          {
            text: "Price",
            sortable: true,
            direction: "asc",
            value: "price"
          }
        ],
        items: [
          {
            title: "Intro to CSS",
            name: "Derek",
            price: 858
          },
          {
            title: "Backend",
            name: "Adam",
            price: 112
          },
          {
            title: "Intro to JavaScript",
            name: "Chris",
            price: 1280
          },
        ]
      }
    },
    methods: {
      removeHeader(index) {
        this.header.splice(index, 1)
      },
      addHeader() {
        this.header.push({text: "", sortable: "", direction: "", value: ""});
      },
      removeItem(index) {
        this.items.splice(index, 1)
      },
      addItem() {
        this.items.push({title: "", name: "", price: ""});
      }
    },
    created() {
      this.component = VDataTable;
    },
    computed: {
      code() {return`<v-data-table
  title="${this.title}"
  ${this.search ? 'search' : ''}
  :header="${JSON.stringify(this.header).replaceAll("\"", "'")}"
  :items="${JSON.stringify(this.items).replaceAll("\"", "'")}"
/>`.replace(/(^[ \t]*\n)/gm, "")}
    }
  }
</script>