<script lang="ts">
import Navigation from "./Navigation.svelte";
</script>

<header>
  <div>
    <img src="/branding.png" alt="dachboden session logo" />
    <slot />
  </div>
  <div><Navigation /></div>
</header>

<style>
header {
  background-color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

div {
  display: flex;
  align-items: center;
}

img {
  width: 42px;
  height: 42px;
  padding-right: 1rem;
}
</style>
