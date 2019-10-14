<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
img,
ol,
ul,
li,
form,
label,
canvas,
figure,
figcaption,
footer,
header,
nav {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

figcaption,
figure,
footer,
header,
nav {
  display: block;
}

body {
  line-height: 1.2;
}

ol,
ul {
  list-style: none;
}

:root {
  --color-background: hsl(0, 0%, 20%);
  --color-background-content: hsl(60, 25%, 98%);
  --color-brand: hsl(205, 100%, 60%);
  --color-brand-sub: hsl(65, 70%, 50%);
  --color-status-open: hsl(231, 54%, 35%);
  --color-status-working: hsl(65, 70%, 35%);
  --color-status-done: hsl(100, 65%, 35%);
  --color-status-pending: hsl(0, 0%, 55%);
  --color-text: hsl(0, 0%, 100%);
  --color-text-inverse: hsl(0, 0%, 20%);
  --height-header: 7.2rem;
  --shadow-position-default: 0 2px 4px rgba(0, 0, 0, 0.5);
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}
</style>
