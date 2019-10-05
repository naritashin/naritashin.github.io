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
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

:root {
  --color-brand: hsl(205, 100%, 60%);
  --color-brand-sub: hsl(65, 70%, 50%);
  --color-background: hsl(0, 0%, 20%);
  --color-text: hsl(0, 0%, 100%);
  --color-text-inverse: hsl(0, 0%, 20%);
  --height-header: 7.2rem;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}
</style>
