<template>
  <div class="overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
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
          <th
            :class="
              `px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider`
            "
          >
            Default
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
            <template v-if="prop.required">
              <v-badge>{{ prop.required }}</v-badge>
            </template>
            <template v-else>
              {{ prop.required }}
            </template>
          </td>
          <td
            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
          >
            {{ prop.type.name }}
          </td>
          <td
            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
          >
            {{ prop.default }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["component"]
};
</script>
