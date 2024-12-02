<script lang="ts">
  export let serie: any = null;
</script>

{#if serie}
  <a
    href="/series/{serie.id}"
    class="flex flex-col rounded-md overflow-hidden border border-zinc-800"
  >
    <img src={serie.imagem} alt="Capa Serie" class="h-96 object-cover" />

    <div class="flex flex-col gap-2 p-5">
      <span class="text-2xl font-black text-center">{serie.titulo}</span>

      <span class="text-sm text-zinz-400 text-justify">{serie.descricao}</span>

      <button class="botao verde self-end">Leia mais...</button>
    </div>
  </a>
{/if}
