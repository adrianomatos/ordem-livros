<script>
  import ItemAutor from "../../components/autor/ItemAutor.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
  import autores from "../../constants/autores.js";
</script>

<div class="flex flex-col gap-5">
  <Titulo
    principal="Autores"
    secundario="Conheça os autores que contribuem com as matérias do nosso site."
  />

  <div class="grid grid-cols-2 gap-5">
    {#each autores as autor}
      <ItemAutor {autor} />
    {/each}
  </div>
</div>


<!-- 
AUTOR

<script>
  import ConteudoAutor from "../../../components/autor/ConteudoAutor.svelte";
  import autores from "../../../constants/autores.js";
</script>

<h1 class="text-3xl font-bold">George R.R. Martin</h1>
<a href="/">Home</a>

<ConteudoAutor autor={autores[2]} />
-->