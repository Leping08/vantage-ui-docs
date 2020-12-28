<template>
  <v-card
    id="example"
    :heading="heading"
    :subheading="subheading"
    :padding="padding"
    :border="border"
    class="m-4"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
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
          Subheading
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="subheading"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Padding
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-toggle v-model="padding"></v-toggle>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50 rounded-b-lg"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Border
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-toggle v-model="border"></v-toggle>
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
  import { VCard } from 'vantage-ui';
  import ComponentPropsTable from '@/components/ComponentPropsTable.vue';
  export default {
    components: {
      ComponentPropsTable
    },
    data() {
      return {
        component: null,
        padding: true,
        border: true,
        heading: 'Card',
        subheading: 'Subheading',
      }
    },
    created() {
      this.component = VCard;
    },
    computed: {
      code() {return`
<v-card 
  heading="${this.heading}"
  subheading="${this.subheading}"
  :padding="${this.padding}"
  :border="${this.border}"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</v-card>
      `}
    }
  }
</script>