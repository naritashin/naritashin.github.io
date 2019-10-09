<template>
  <div class="sidemenu">
    <ul>
      <li>
        <router-link class="link" to="/">Top</router-link>
      </li>
      <li>
        <router-link class="link" to="/open">Open</router-link>
      </li>
      <li>
        <router-link class="link" to="/working">Working</router-link>
      </li>
      <li>
        <router-link class="link" to="/done">Done</router-link>
      </li>
      <li>
        <router-link class="link" to="/pending">Pending</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidemenu'
};
</script>

<style lang="scss" scoped>
.sidemenu {
  background-color: var(--color-background-content);
  height: 100%;
  color: var(--color-text-inverse);
}

.link {
  color: var(--color-text-inverse);
  cursor: pointer;
  display: block;
  padding: 12px 48px;
  text-decoration: none;
}

.link:hover {
  background-color: hsl(0, 0%, 93%);
}

.router-link-exact-active {
  font-weight: 600;
}
</style>
