<template>
  <v-card
    id="button"
    heading="Button"
    :padding="true"
    :border="true"
    class="m-4"
  >
    <v-button
      :color="color"
      :full-width="fullWidth"
      :outline="outline"
      :rounded="rounded"
      :size="size"
      class=""
    >
      Submit
    </v-button>
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
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Full Width
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-toggle v-model="fullWidth"></v-toggle>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Outline
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-toggle v-model="outline"></v-toggle>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Size
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-search-select
            v-model="size"
            :items="sizeOptions"
            placeholder="Select Size"
          ></v-search-select>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white rounded-b-lg"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Rounded
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-search-select
            v-model="rounded"
            :items="roundedOptions"
            placeholder="Select Shape"
          ></v-search-select>
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
  import { VButton } from 'vantage-ui';
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
        color: 'cyan',
        fullWidth: false,
        outline: false,
        rounded: 'rounded-lg',
        size: 'md',
        sizeOptions: [
          'xs',
          'sm',
          'md',
          'lg',
          'xl'
        ],
        roundedOptions: [
          'rounded-none',
          'rounded-sm',
          'rounded',
          'rounded-md',
          'rounded-lg',
          'rounded-xl',
          'rounded-2xl',
          'rounded-3xl',
          'rounded-full'
        ]
      }
    },
    created() {
      this.component = VButton;
    },
    computed: {
      code() {return`<v-button 
  color="${this.color}"
  :fullWidth="${this.fullWidth}"
  :outline="${this.outline}"
  rounded="${this.rounded}"
  size="${this.size}"
>
  Submit
</v-button>`}
    }
  }
</script>