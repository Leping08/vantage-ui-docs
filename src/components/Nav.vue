<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Off-canvas menu for mobile -->
    <div class="md:hidden">
      <transition
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-show="showMobileNav" class="fixed inset-0 flex z-40">
          <!--
          Off-canvas menu overlay, show/hide based on off-canvas menu state.

          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
          -->

          <div class="fixed inset-0">
            <div
              @click="showMobileNav = !showMobileNav"
              class="absolute inset-0 bg-gray-600 opacity-75"
            ></div>
          </div>
          <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
          -->

          <transition
            enter-active-class="transition ease-in-out duration-300 transform"
            enter-from-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition ease-in-out duration-300 transform"
            leave-from-class="translate-x-0"
            leave-to-class="-translate-x-full"
          >
            <div
              v-show="showMobileNav"
              class="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-gray-800"
            >
              <div class="absolute top-0 right-0 -mr-14 p-1">
                <button
                  @click="showMobileNav = !showMobileNav"
                  class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                >
                  <svg
                    class="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex items-center px-4 py-2 bg-gray-900">
                <div>
                  <svg
                    class="h-10"
                    viewBox="0 0 280 245"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M192.058 179.423L229.891 245H269.904C277.602 245 282.413 236.667 278.564 230L220.633 129.66L192.058 179.423Z"
                      class="text-cyan-700"
                      fill="currentColor"
                    />
                    <path
                      d="M209.07 109.633L180.5 159.388L111.377 39.5761L131.34 5.00002C135.189 -1.66665 144.811 -1.66667 148.66 5L209.07 109.633Z"
                      class="text-cyan-700"
                      fill="currentColor"
                    />
                    <path
                      d="M154.402 245H206.801L180.54 199.481L154.402 245Z"
                      class="text-cyan-500"
                      fill="currentColor"
                    />
                    <path
                      d="M168.982 179.446L140 229.918L70.93 109.633L99.8281 59.5798L168.982 179.446Z"
                      class="text-cyan-500"
                      fill="currentColor"
                    />
                    <path
                      d="M59.3672 129.66L1.43596 230C-2.41304 236.667 2.39823 245 10.0962 245H125.598L59.3672 129.66Z"
                      class="text-cyan-300"
                      fill="currentColor"
                    />
                    <!-- <path fill-rule="evenodd" clip-rule="evenodd" d="M111.377 39.5761L229.891 245H206.801L99.8281 59.5798L111.377 39.5761Z" fill="white"/> -->
                    <!-- <path fill-rule="evenodd" clip-rule="evenodd" d="M220.612 127.919L154.361 245H125.639L59.3879 127.92L70.9092 107.669L140 229.768L209.091 107.669L220.612 127.919Z" fill="white"/> -->
                  </svg>
                </div>
                <div
                  class="ml-2 text-lg md:text-xl lg:text-2xl tracking-normal font-sans text-gray-200"
                >
                  Vantage Ui
                </div>
              </div>
              <div class="flex flex-col overflow-y-auto">
                <nav class="flex-1 py-4 bg-gray-800 space-y-1">
                  <div v-for="route in routes" :key="route">
                    <router-link
                      :to="{ name: route.name }"
                      v-slot="{ isActive }"
                    >
                      <div
                        @click="showMobileNav = false"
                        :class="[
                          isActive
                            ? `bg-gray-900 border-l-4 border-cyan-400`
                            : 'border-l-4 border-gray-800'
                        ]"
                        class="group flex items-center px-4 py-2 text-sm leading-5 font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150 hover:border-cyan-400"
                      >
                        <span
                          class="iconify mr-2"
                          :data-icon="route.icon"
                          data-icon-inline="false"
                          aria-hidden="true"
                        ></span>
                        {{ route.title }}
                      </div>
                    </router-link>
                  </div>
                </nav>
              </div>
            </div>
          </transition>
          <div class="flex-shrink-0 w-14">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </transition>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col h-0 flex-1">
          <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <div>
              <svg
                class="h-10"
                viewBox="0 0 280 245"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M192.058 179.423L229.891 245H269.904C277.602 245 282.413 236.667 278.564 230L220.633 129.66L192.058 179.423Z"
                  class="text-cyan-700"
                  fill="currentColor"
                />
                <path
                  d="M209.07 109.633L180.5 159.388L111.377 39.5761L131.34 5.00002C135.189 -1.66665 144.811 -1.66667 148.66 5L209.07 109.633Z"
                  class="text-cyan-700"
                  fill="currentColor"
                />
                <path
                  d="M154.402 245H206.801L180.54 199.481L154.402 245Z"
                  class="text-cyan-500"
                  fill="currentColor"
                />
                <path
                  d="M168.982 179.446L140 229.918L70.93 109.633L99.8281 59.5798L168.982 179.446Z"
                  class="text-cyan-500"
                  fill="currentColor"
                />
                <path
                  d="M59.3672 129.66L1.43596 230C-2.41304 236.667 2.39823 245 10.0962 245H125.598L59.3672 129.66Z"
                  class="text-cyan-300"
                  fill="currentColor"
                />
                <!-- <path fill-rule="evenodd" clip-rule="evenodd" d="M111.377 39.5761L229.891 245H206.801L99.8281 59.5798L111.377 39.5761Z"/> -->
                <!-- <path fill-rule="evenodd" clip-rule="evenodd" d="M220.612 127.919L154.361 245H125.639L59.3879 127.92L70.9092 107.669L140 229.768L209.091 107.669L220.612 127.919Z"/> -->
              </svg>
            </div>
            <div
              class="ml-2 font-lg text-2xl tracking-normal font-sans text-gray-200"
            >
              Vantage Ui
            </div>
          </div>
          <div class="flex-1 flex flex-col overflow-auto">
            <div class="flex-1 py-4 bg-gray-800 space-y-1">
              <div v-for="route in routes" :key="route">
                <router-link :to="{ name: route.name }" v-slot="{ isActive }">
                  <div
                    :class="[
                      isActive
                        ? `bg-gray-900 border-l-4 border-cyan-400`
                        : 'border-l-4 border-gray-800'
                    ]"
                    class="group flex items-center px-4 py-2 text-sm leading-5 font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150 hover:border-cyan-400"
                  >
                    <span
                      class="iconify mr-2"
                      :data-icon="route.icon"
                      data-icon-inline="false"
                      aria-hidden="true"
                    ></span>
                    {{ route.title }}
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          @click="showMobileNav = !showMobileNav"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          aria-label="Open sidebar"
        >
          <svg
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 items-center flex">
            <div class="md:hidden flex items-center px-4 py-2 mx-auto">
              <div>
                <svg
                  class="h-10"
                  viewBox="0 0 280 245"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M192.058 179.423L229.891 245H269.904C277.602 245 282.413 236.667 278.564 230L220.633 129.66L192.058 179.423Z"
                    class="text-cyan-700"
                    fill="currentColor"
                  />
                  <path
                    d="M209.07 109.633L180.5 159.388L111.377 39.5761L131.34 5.00002C135.189 -1.66665 144.811 -1.66667 148.66 5L209.07 109.633Z"
                    class="text-cyan-700"
                    fill="currentColor"
                  />
                  <path
                    d="M154.402 245H206.801L180.54 199.481L154.402 245Z"
                    class="text-cyan-500"
                    fill="currentColor"
                  />
                  <path
                    d="M168.982 179.446L140 229.918L70.93 109.633L99.8281 59.5798L168.982 179.446Z"
                    class="text-cyan-500"
                    fill="currentColor"
                  />
                  <path
                    d="M59.3672 129.66L1.43596 230C-2.41304 236.667 2.39823 245 10.0962 245H125.598L59.3672 129.66Z"
                    class="text-cyan-300"
                    fill="currentColor"
                  />
                  <!-- <path fill-rule="evenodd" clip-rule="evenodd" d="M111.377 39.5761L229.891 245H206.801L99.8281 59.5798L111.377 39.5761Z" fill="white"/> -->
                  <!-- <path fill-rule="evenodd" clip-rule="evenodd" d="M220.612 127.919L154.361 245H125.639L59.3879 127.92L70.9092 107.669L140 229.768L209.091 107.669L220.612 127.919Z" fill="white"/> -->
                </svg>
              </div>
              <div
                class="ml-2 font-lg text-3xl tracking-normal font-sans text-gray-600"
              >
                Vantage Ui
              </div>
            </div>
            <div
              class="flex-1 hidden md:block text-xl font-semibold text-gray-900"
            >
              <search class="pl-10" />
            </div>
          </div>
          <div class="ml-2 flex items-center md:ml-6">
            <div class="text-gray-500 mr-4 text-sm">
              v0.7.5
            </div>
            <a
              href="https://github.com/Leping08/Vantage-UI"
              class="text-gray-500 text-xl pr-6 md:pr-10"
              target="_blank"
            >
              <svg class="w-6 md:w-8 h-auto" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <main
        class="flex-1 relative overflow-x-hidden focus:outline-none"
        tabindex="0"
      >
        <div class="pt-2 pb-6 md:py-6">
          <div class="mx-auto px-4 sm:px-6 md:px-10">
            <!-- Replace with your content -->
            <slot></slot>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  name: "Nav",
  components: {
    Search
  },
  data() {
    return {
      showMobileNav: false,
      routes: [
        {
          title: "Home",
          name: "home"
        },
        {
          title: "Installation",
          name: "installation"
        },
        {
          title: "Avatar",
          name: "avatar"
        },
        {
          title: "Badge",
          name: "badge"
        },
        {
          title: "Button",
          name: "button"
        },
        {
          title: "Card",
          name: "card"
        },
        {
          title: "Check Box",
          name: "checkbox"
        },
        {
          title: "Countdown",
          name: "countdown"
        },
        {
          title: "Data Table",
          name: "data-table"
        },
        {
          title: "Date Range Picker",
          name: "date-range-picker"
        },
        {
          title: "Description List",
          name: "description-list"
        },
        {
          title: "Input",
          name: "input"
        },
        {
          title: "Ping",
          name: "ping"
        },
        {
          title: "Progress Bar",
          name: "progress-bar"
        },
        {
          title: "Progress Spinner",
          name: "progress-spinner"
        },
        {
          title: "Radio",
          name: "radio"
        },
        {
          title: "Search Select",
          name: "search-select"
        },
        {
          title: "Stats",
          name: "stats"
        },
        {
          title: "Tabs",
          name: "tabs"
        },
        {
          title: "Toggle",
          name: "toggle"
        }
      ]
    };
  }
};
</script>
