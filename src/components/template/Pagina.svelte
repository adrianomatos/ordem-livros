<script>
  import AreaLateral from "./AreaLateral.svelte";
  import Cabecalho from "./Cabecalho.svelte";
  import Rodape from "./Rodape.svelte";
</script>

<!-- Layout Tailwind GLOBAL -->
<div class="flex flex-col min-h-screen bg-black text-white">
  <Cabecalho />

  <!-- Layout Tailwind carregadas dentro dessa área -->
  <div class="flex-1 flex max-w-7xl mx-auto w-full p-5 gap-5">
    <main class="flex-1">
      <!-- MIOLO DA PÁGINA - Conteúdo similar ao prop do react -->
      <!-- SLOT CARREGA A INDEX (+page.svelte) DA PASTA -->
      <slot></slot>
    </main>
    <AreaLateral />
  </div>

  <Rodape />
</div>
