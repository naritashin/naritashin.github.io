<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
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
</style>
