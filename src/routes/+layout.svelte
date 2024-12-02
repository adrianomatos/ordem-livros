<script lang="ts">
  import "../app.css";
  import Pagina from "../components/template/Pagina.svelte";
  let { children } = $props();
</script>

<Pagina>
  <!-- CARREGA A INDEX (+page.svelte) DA PASTA -->
  {@render children()}
</Pagina>
