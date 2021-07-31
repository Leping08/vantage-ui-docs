<template>
  <v-card id="input" heading="Input" :padding="true" :border="true" class="m-4">
    <v-input
      :label="label"
      :placeholder="placeholder"
      v-model="value"
      :color="color"
      :type="type"
      :rules="rules"
      :help-text="helpText"
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
          Placeholder
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="placeholder"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Label
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="label"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Rules
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <div class="flex py-2">
            <v-toggle v-model="minRule"></v-toggle>
            <div class="px-4 text-gray-600">
              Min
            </div>
          </div>
          <div class="flex py-2">
            <v-toggle v-model="maxRule"></v-toggle>
            <div class="px-4 text-gray-600">
              Max
            </div>
          </div>
          <div class="flex py-2">
            <v-toggle v-model="requiredRule"></v-toggle>
            <div class="px-4 text-gray-600">
              Required
            </div>
          </div>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Type
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="type"></v-input>
        </dd>
      </div>
      <div
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          Help Text
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          <v-input v-model="helpText"></v-input>
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
  import { VInput } from 'vantage-ui';
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
        label: 'Name',
        placeholder: 'John Doe',
        type: 'text',
        helpText: "Please provide a first and last name",
        minRule: true,
        maxRule: true,
        requiredRule: true
      }
    },
    created() {
      this.component = VInput;
    },
    computed: {
      code() {return`<v-input 
  v-model="${this.value}"
  color="${this.color}"
  label="${this.label}"
  placeholder="${this.placeholder}"
  :rules="${JSON.stringify(this.rules).replaceAll("\"", "'")}"
  type="${this.type}"
  help-text="${this.helpText}"
/>`.replace(/(^[ \t]*\n)/gm, "")},
      rules() {
        return [this.minRule ? 'min:2' : null, this.maxRule ? 'max:255' : null, this.requiredRule ? 'required' : null,].filter(Boolean)
      }
    }
  }
</script>