<script lang="ts">
  import { IconBrandAmazon } from "@tabler/icons-svelte";
  export let livro: any = null;
</script>

{#if livro}
  <a
    href={livro.link}
    target="_blank"
    class="flex flex-col rounded-md overflow-hidden bg-zinc-800"
  >
    <img src={livro.imagem} alt="Imagem do livro" class="h-96" />
    <div class="flex flex-col flex-1 p-2 gap-2">
      <!-- FLEX-1 dentro de FLEX-COL p/ manter btn no final -->
      <span class="flex-1 font-bold text-center">{livro.titulo}</span>
      <button class="botao verde">
        <IconBrandAmazon size={25} />
        <span>Link do Livro</span>
      </button>
    </div>
  </a>
{/if}
