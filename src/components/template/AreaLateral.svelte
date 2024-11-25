<script>
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
</script>

<aside
  class="flex flex-col self-start gap-10 w-72 p-5 rounded-md text-zinc-300 border-t border-zinc-800 bg-zinc-800"
>
  <Menu titulo="Navegação">
    <MenuItem link="/" texto="Início" />
    <MenuItem link="/autores" texto="Autores" />
    <MenuItem link="/assuntos" texto="Assuntos" />
    <MenuItem link="/instituicoes" texto="Instituições" />
  </Menu>

  <Menu titulo="Principais Autores">
    <MenuItem link="/adriano" texto="Adriano Matos" />
    <MenuItem link="/andressa" texto="Andressa Lima" />
    <MenuItem link="/larissa" texto="Larissa Alves" />
  </Menu>

  <Menu titulo="Categorias">
    <MenuItem link="/autores" texto="Últimas notícias" />
    <MenuItem link="/autores" texto="Notícias populares" />
    <MenuItem link="/autores" texto="Facebook" />
    <MenuItem link="/autores" texto="Instagram" />
    <MenuItem link="/autores" texto="Youtube" />
  </Menu>
</aside>
