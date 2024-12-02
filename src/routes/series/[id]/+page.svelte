<script>
  import { page } from "$app/stores";
  import ConteudoSerie from "../../../components/serie/ConteudoSerie.svelte";
</script>

<ConteudoSerie serie={$page.data.serie} />

<!-- <span>{$page.data.serie.titulo}</span> -->
