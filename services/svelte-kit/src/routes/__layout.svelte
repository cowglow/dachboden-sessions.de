<script lang="ts">
import Header from "../lib/components/Header.svelte";
import Footer from "../lib/components/Footer.svelte";
</script>

<Header>Dachboden Sessions (Logo Editor)</Header>
<main>
  <slot />
</main>
<Footer>&copy; {new Date().getFullYear()}</Footer>
