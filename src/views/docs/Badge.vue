<template>
  <v-card id="badge" heading="Badge" :padding="true" :border="true" class="m-4">
    <v-badge :color="color" class="">
      Success
    </v-badge>
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
  import { VBadge } from 'vantage-ui';
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
        color: 'cyan'
      }
    },
    created() {
      this.component = VBadge;
    },
    computed: {
      code() {return`<v-badge 
  color="${this.color}"
>
  Success
</v-badge>`.replace(/(^[ \t]*\n)/gm, "")}
    }
  }
</script>