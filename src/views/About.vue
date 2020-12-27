<template>
  <div class="">
    <div v-for="component in components" :key="component">
      <v-card
        :padding="false"
        :headingBorder="true"
        :heading="component.name"
        class="m-4"
      >
        <!-- <h3 class="px-6 py-4 whitespace-no-wrap text-md leading-5 text-gray-600">Props</h3> -->

        <table class="min-w-full divide-y divide-gray-200">
          <thead class="">
            <tr class="text-left">
              <th
                :class="
                  `px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider`
                "
              >
                Name
              </th>
              <th
                :class="
                  `px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider`
                "
              >
                Required
              </th>
              <th
                :class="
                  `px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider`
                "
              >
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(prop, name, index) in component.props"
              :key="prop"
              :class="index % 2 ? 'bg-gray-50' : 'bg-white'"
            >
              <td
                class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
              >
                {{ name }}
              </td>
              <td
                class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
              >
                {{ prop.required }}
              </td>
              <td
                class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
              >
                {{ prop.type.name }}
              </td>
            </tr>
          </tbody>
        </table>
      </v-card>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import * as vantageComponents from 'vantage-ui';
export default {
  data() {
    return {
      components: []
    }
  },
  created() {
    Object.keys(vantageComponents).forEach((key) => {
      console.log(vantageComponents[key].props);
      this.components.push({
        "name": key,
        "props": vantageComponents[key].props,
        "slots": vantageComponents[key].slots,
        "component": vantageComponents[key]
      });
    });
    console.log(vantageComponents);
  }
}
</script>
