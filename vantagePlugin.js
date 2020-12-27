/* eslint-disable */
const colors = require("tailwindcss/colors");
/* eslint-enable */

const shadows = [
  "shadow-xs",
  "shadow-sm",
  "shadow",
  "shadow-md",
  "shadow-lg",
  "shadow-xl",
  "shadow-2xl",
  "shadow-inner",
  "shadow-none"
];
const rounded = [
  "rounded-none",
  "rounded-sm",
  "rounded",
  "rounded-md",
  "rounded-lg",
  "rounded-xl",
  "rounded-2xl",
  "rounded-3xl",
  "rounded-full"
];

function colorsClasses(inputColors = "*") {
  let colorNames = [];

  if (inputColors === "*") {
    colorNames = Object.keys(colors);
  }

  if (Array.isArray(inputColors)) {
    colorNames = Object.keys(colors).filter(function(val) {
      return inputColors.indexOf(val) != -1;
    });
  }

  const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const classes = [];

  colorNames.map(color => {
    numbers.map(number => {
      //Background color
      classes.push(`bg-${color}-${number}`);
      classes.push(`hover:bg-${color}-${number}`);
      classes.push(`active:bg-${color}-${number}`);
      classes.push(`focus:bg-${color}-${number}`);

      //Border color
      classes.push(`border-${color}-${number}`);
      classes.push(`hover:border-${color}-${number}`);
      classes.push(`active:border-${color}-${number}`);
      classes.push(`focus:border-${color}-${number}`);

      //Text color
      classes.push(`text-${color}-${number}`);
    });
  });

  console.log(classes);

  return classes;
}

function heightAndWidths() {
  const classes = [];
  const heights = [
    0,
    0.5,
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    14,
    16,
    20,
    24,
    28,
    32,
    36,
    40,
    44,
    48,
    52,
    56,
    60,
    64,
    72,
    80,
    96
  ];

  heights.map(number => {
    classes.push(`h-${number}`);
    classes.push(`w-${number}`);
  });

  return classes;
}

function vantageSafelist(colors) {
  return [
    ...colorsClasses(colors),
    ...heightAndWidths(),
    ...shadows,
    ...rounded
  ];
}

function vantageContent() {
  return [
    "./node_modules/vantage-ui/src/lib-components/**/*.vue",
    "./node_modules/vantage-ui/src/lib-components/**/*.js"
  ];
}

module.exports = {
  vantageSafelist,
  vantageContent
};