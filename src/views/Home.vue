<template>
  <div class="flex pb-40 pt-10 lg:pb-0">
    <div class="flex items-center w-full lg:w-2/5">
      <div>
        <div class="flex items-center">
          <svg
            class="h-20"
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
          <!-- <svg class="h-20" viewBox="0 0 280 245" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M192.058 179.423L229.891 245H269.904C277.602 245 282.413 236.667 278.564 230L220.633 129.66L192.058 179.423Z" :class="`text-${selectedColor}-700`" fill="currentColor"/>
            <path d="M209.07 109.633L180.5 159.388L111.377 39.5761L131.34 5.00002C135.189 -1.66665 144.811 -1.66667 148.66 5L209.07 109.633Z" :class="`text-${selectedColor}-700`" fill="currentColor"/>
            <path d="M154.402 245H206.801L180.54 199.481L154.402 245Z" :class="`text-${selectedColor}-500`" fill="currentColor"/>
            <path d="M168.982 179.446L140 229.918L70.93 109.633L99.8281 59.5798L168.982 179.446Z" :class="`text-${selectedColor}-500`" fill="currentColor"/>
            <path d="M59.3672 129.66L1.43596 230C-2.41304 236.667 2.39823 245 10.0962 245H125.598L59.3672 129.66Z" :class="`text-${selectedColor}-300`" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M111.377 39.5761L229.891 245H206.801L99.8281 59.5798L111.377 39.5761Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M220.612 127.919L154.361 245H125.639L59.3879 127.92L70.9092 107.669L140 229.768L209.091 107.669L220.612 127.919Z" fill="white"/>
          </svg> -->
          <div
            class="font-lg text-7xl tracking-normal font-sans text-gray-600 ml-2"
          >
            Vantage Ui
          </div>
        </div>
        <div class="text-gray-500 text-xl pt-3">
          A Vue 3 component library styled with Tailwindcss
        </div>
      </div>
    </div>
    <div class="hidden lg:block w-4/5 -mt-32 -mr-72 transform rotate-3">
      <div class="hidden lg:grid gap-4 grid-cols-4 grid-rows-4 items-center">
        <div
          class="justify-self-auto h-full font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        ></div>
        <div
          class="justify-self-auto h-full font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        ></div>
        <div
          class="justify-self-auto h-full font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        ></div>
        <div
          class="justify-self-auto h-full font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        ></div>

        <div
          class="justify-self-auto h-full font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        >
          <v-toggle v-model="toggle" :color="selectedColor" />
        </div>
        <div
          class="justify-self-auto h-full text-white text-2xl font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        >
          <v-input
            v-model="input"
            placeholder="Placeholder"
            label="Input"
            class="p-4"
            :color="selectedColor"
          ></v-input>
        </div>
        <div
          class="justify-self-auto h-full text-white text-2xl font-extrabold flex justify-center items-center"
        >
          <v-stats
            class="h-full w-full items-center flex"
            heading="Users"
            :first-metric="578"
            :second-metric="349"
            :color="selectedColor"
          />
        </div>
        <div
          class="justify-self-auto h-full font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        ></div>

        <div
          class="justify-self-auto h-full text-white text-2xl font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        >
          <v-button :color="selectedColor">Button</v-button>
        </div>
        <div
          class="justify-self-auto h-full text-white text-2xl font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        >
          <div class="grid gap-2 grid-cols-2 grid-rows-2 items-center">
            <div class="">
              <v-badge color="green" class="shadow">Success</v-badge>
            </div>
            <div class="hidden lg:block">
              <v-badge color="yellow" class="shadow">Warning</v-badge>
            </div>
            <div class="hidden lg:block">
              <v-badge color="red" class="shadow">Danger</v-badge>
            </div>
            <div class="">
              <v-badge color="blue" class="shadow">Alert</v-badge>
            </div>
          </div>
        </div>
        <div
          class="justify-self-auto h-full text-white text-2xl font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        >
          <v-progress-spinner :size="10" :color="selectedColor" />
        </div>
        <div
          class="justify-self-auto h-full font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        ></div>

        <div
          class="justify-self-auto h-full font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        >
          <div>
            <v-tabs v-model="tabId" :color="selectedColor">
              <v-tab :tabId="1">Tab 1</v-tab>
              <v-tab :tabId="2">Tab 2</v-tab>

              <v-tab-content
                :tabId="1"
                class="text-gray-500 font-medium text-sm leading-5"
                >1st content</v-tab-content
              >
              <v-tab-content
                :tabId="2"
                class="text-gray-500 font-medium text-sm leading-5"
                >2nd content</v-tab-content
              >
            </v-tabs>
          </div>
        </div>
        <div
          class="justify-self-auto h-full text-white text-2xl font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        >
          <v-avatar name="John Doe" class="shadow-md" :color="selectedColor" />
        </div>
        <div
          class="justify-self-auto h-full text-white text-2xl font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        >
          <v-progress-bar
            class="m-4"
            :percent="progressBar"
            :height="3"
            :color="selectedColor"
          />
        </div>
        <div
          class="justify-self-auto h-full font-extrabold bg-white rounded-lg shadow-md flex justify-center items-center"
        ></div>
      </div>
    </div>
  </div>

  <div class="-mt-40">
    <div class="-mx-10">
      <svg class="text-blueGray-700" viewBox="0 0 1440 260">
        <path
          fill="currentColor"
          fill-opacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,202.7C672,181,768,107,864,85.3C960,64,1056,96,1152,117.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>

    <div
      class="bg-blueGray-700 -mx-10 flex flex-col-reverse lg:flex-row items-center px-6"
    >
      <div class="flex w-full">
        <div class="text-gray-100 flex-1 w-1/4 ml-20">
          <div v-for="item in list1" :key="item" class="flex m-2">
            <div class="flex items-center">
              <div class="rounded-full bg-green-200 text-green-800">
                <svg class="h-6 w-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-gray-200 text-lg">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
        <div class="text-gray-100 flex-1 w-1/4">
          <div v-for="item in list2" :key="item" class="flex m-2">
            <div class="flex items-center">
              <div class="rounded-full bg-green-200 text-green-800">
                <svg class="h-6 w-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-gray-200 text-lg">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div
          class="bg-blueGray-500 transform rotate-12 rounded-lg shadow-lg m-10 mb-14 md:m-20 lg:m-10 xl:m-20"
        >
          <div
            :class="
              `bg-${selectedColor}-500 transform -rotate-6 rounded-lg shadow-lg`
            "
          >
            <v-card
              heading="Common Components"
              class="transform -rotate-6 rounded-lg shadow-lg"
            >
              <div class="text-blueGray-600">
                Functional components for practical uses cases like toggles,
                date range pickers, and search selects beautifully styled with
                Tailwindcss and packaged up for any Vue 3 application.
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="-mx-16 -my-0 sm:-my-0 md:-my-0 lg:-my-10 xl:-my-12 2xl:-my-8">
    <svg class="text-blueGray-700" viewBox="0 0 1440 320">
      <path
        fill="currentColor"
        fill-opacity="1"
        d="M0,32L48,64C96,96,192,160,288,154.7C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,80C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>

  <div class="-mx-10 -mt-6 bg-gray-100 px-6">
    <div class="flex lg:flex-row flex-col items-center">
      <div class="w-full">
        <div
          class="bg-blueGray-500 transform -rotate-12 rounded-lg shadow-lg m-10 mb-14 md:m-20 lg:m-10 xl:m-20"
        >
          <div
            :class="
              `bg-${selectedColor}-500 transform rotate-6 rounded-lg shadow-lg`
            "
          >
            <v-card heading="Colors" class="transform rotate-6 shadow-lg">
              <div class="text-blueGray-600">
                Every colored vantage component has a color property that can be
                set to any of the colors in the Tailwind color palette. Select a
                color and checkout the components at the top of the page.
              </div>
            </v-card>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="m-8">
          <div class="grid gap-4 grid-cols-6">
            <div v-for="color in colors" :key="color">
              <div
                :class="[
                  `bg-${color}-500 hover:bg-${color}-600 active:bg-${color}-700 p-8 sm:p-8 md:p-8 lg:p-6 xl:p-8 2xl:p-10 rounded-lg cursor-pointer relative border-4 border-transparent hover:border-white`
                ]"
                @click="selectColor(color)"
              >
                <div
                  v-if="selectedColor === color"
                  class="text-blueGray-800 absolute top-0 right-0"
                >
                  <svg
                    :class="
                      `h-6 md:h-4 lg:h-5 xl:h-6 w-6 md:w-4 lg:w-5 xl:w-6 rounded-full bg-${color}-100 text-${color}-600 m-2`
                    "
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="bg-blueGray-700 h-24 -mb-12 -mx-12 transform -rotate-3 mt-20"
  ></div>

  <div class="bg-blueGray-700 -mx-10 -mt-6 pt-8 px-6">
    <div class="flex flex-col lg:flex-row-reverse items-center">
      <div class="w-full">
        <div
          class="bg-blueGray-500 transform rotate-12 rounded-lg shadow-lg m-10 md:m-20 lg:m-10 xl:m-20"
        >
          <div
            :class="
              `bg-${selectedColor}-500 transform -rotate-6 rounded-lg shadow-lg`
            "
          >
            <v-card
              heading="Individual Imports"
              class="transform -rotate-6 shadow-lg"
            >
              <div class="text-blueGray-600">
                Every vantage component can be individually imported to save the
                application build size.
              </div>
            </v-card>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="mx-2 lg:mx-4 xl:mx-8 px-2 lg:px-4 xl:px-8 my-16">
          <code-editor
            :code="importCode"
            :copy="true"
            :heading="true"
          ></code-editor>
        </div>
      </div>
    </div>
  </div>

  <div
    class="bg-blueGray-700 h-24 -mb-12 -mx-12 transform -rotate-3 -mt-12"
  ></div>

  <div class="bg-gray-50 px-6 pt-40 pb-20 -mx-12 -mb-6">
    <div class="flex lg:flex-row flex-col items-center">
      <div class="w-full">
        <div
          class="bg-blueGray-500 transform -rotate-12 rounded-lg shadow-lg mx-20 mb-14 md:m-20 lg:m-10 xl:m-20"
        >
          <div
            :class="
              `bg-${selectedColor}-500 transform rotate-6 rounded-lg shadow-lg`
            "
          >
            <v-card
              id="tinker"
              heading="Tinker in the Docs"
              :padding="false"
              :border="true"
              class="m-4 overflow-visible transform rotate-6"
            >
              <dl class="">
                <div
                  class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Color
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    <color-select
                      v-model="selectedColor"
                      :color="selectedColor"
                    />
                  </dd>
                </div>
                <div
                  class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Full Width
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    <v-toggle
                      :color="selectedColor"
                      v-model="fullWidth"
                    ></v-toggle>
                  </dd>
                </div>
                <div
                  class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-white"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Outline
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    <v-toggle
                      :color="selectedColor"
                      v-model="outline"
                    ></v-toggle>
                  </dd>
                </div>
                <div
                  class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200 items-center bg-gray-50"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Size
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    <v-search-select
                      v-model="size"
                      :items="sizeOptions"
                      :color="selectedColor"
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
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    <v-search-select
                      v-model="rounded"
                      :items="roundedOptions"
                      :color="selectedColor"
                      placeholder="Select Shape"
                    ></v-search-select>
                  </dd>
                </div>
              </dl>
            </v-card>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="mx-6 text-center px-6">
          <v-button
            class="z-0"
            :color="selectedColor"
            :outline="outline"
            :full-width="fullWidth"
            :size="size"
            :rounded="rounded"
          >
            Submit
          </v-button>
        </div>

        <div class="w-full">
          <div class="mx-4 p-8">
            <code-editor
              :code="tinkerCode"
              :copy="true"
              :heading="true"
            ></code-editor>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="-mx-10 -my-10 md:-my-4 lg:-my-10 xl:-my-12 2xl:-my-8">
    <svg class="text-blueGray-700 bg-gray-50" viewBox="0 0 1440 320">
      <path
        fill="currentColor"
        fill-opacity="1"
        d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,138.7C672,139,768,149,864,138.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>

  <div class="bg-blueGray-700 pb-20 -mx-12 -mb-12">
    <div class="flex flex-col lg:flex-row-reverse items-center">
      <div class="w-full">
        <div
          class="bg-blueGray-500 transform rotate-12 rounded-lg shadow-lg m-20"
        >
          <div
            :class="
              `bg-${selectedColor}-500 transform -rotate-6 rounded-lg shadow-lg`
            "
          >
            <v-card
              heading="Ready to get started?"
              class="transform -rotate-6 rounded-lg shadow-lg"
            >
              <div class="text-blueGray-600">
                Simply npm install vantage-ui and start using components. Don't
                forget to check out the installation guide for instructions in
                setting up purge css to keep those production bundle sizes low.
              </div>
            </v-card>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="mx-4 px-8">
          <code-editor
            language="shell"
            :code="npmCode"
            :copy="true"
            :heading="true"
          ></code-editor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorSelect from "@/components/ColorSelect.vue";
import CodeEditor from "@/components/CodeEditor.vue";
export default {
  name: "Home",
  components: {
    ColorSelect,
    CodeEditor
  },
  data() {
    return {
      toggle: true,
      input: "",
      tabId: 1,
      progressBar: 75,
      selectedColor: "cyan",
      timer: null,
      list1: ["Input", "Date Range", "Search Select", "Toggle"],
      list2: ["Tabs", "Data Table", "Progress Bar", "Countdown"],
      colors: [
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "lightBlue",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
        "red",
        "orange",
        "amber",
        "yellow",
        //"blueGray",
        //"coolGray",
        "gray"
        //"trueGray",
        //"warmGray",
      ],
      fullWidth: false,
      outline: false,
      rounded: "rounded-lg",
      size: "md",
      sizeOptions: ["xs", "sm", "md", "lg", "xl"],
      roundedOptions: [
        "rounded-none",
        "rounded-sm",
        "rounded",
        "rounded-md",
        "rounded-lg",
        "rounded-xl",
        "rounded-2xl",
        "rounded-3xl",
        "rounded-full"
      ]
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.progressBar = Math.floor(Math.random() * 99) + 1;
    }, 5000);

    setTimeout(() => {
      clearInterval(this.timer);
      this.progressBar = 75;
    }, 1000 * 60 * 2); // 2 min of the progress bar moving around
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
    }
  },
  computed: {
    /* eslint-disable */
    npmCode() {
      return `npm install vantage-ui`
    },
    importCode() {
      return `<template>
  <v-button>
    Submit
  </v-button>
</template>

<script>
import VButton from 'vantage-ui'

export default {
  components: {
    'v-button': VButton
  }
}
<\/script>
`
    },
    tinkerCode() {
      return `<v-button 
  color="${this.selectedColor}"
  :fullWidth="${this.fullWidth}"
  :outline="${this.outline}"
  rounded="${this.rounded}"
  size="${this.size}"
>
  Submit
</v-button>
`
    }
  }
  /* eslint-enable */
};
</script>
