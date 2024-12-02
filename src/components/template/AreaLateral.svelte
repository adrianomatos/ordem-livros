<script>
  import { Icon24Hours, IconBooks, IconBrandFacebook, IconBrandInstagram, IconBrandOffice, IconBrandYoutube, IconBuilding, IconBuildings, IconFriends, IconHome, IconNews, IconRss, IconSquare1, IconUser, IconUsers, IconWorldStar } from "@tabler/icons-svelte";
import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
</script>

<aside
  class="flex flex-col self-start border border-zinc-800 p-5 rounded-md gap-10 w-72 text-zinc-300  "
>
  <Menu titulo="Navegação">
    <MenuItem link="/" texto="Início"><IconHome size={25}/></MenuItem>
    <MenuItem link="/" texto="Séries"><IconBooks/></MenuItem>
    <MenuItem link="/autores" texto="Autores"><IconUsers/></MenuItem>
    <MenuItem link="/instituicoes" texto="Instituições"><IconBuildings/></MenuItem>
  </Menu>

  <Menu titulo="Principais Autores">
    <MenuItem link="/autores/j-k-rowling" texto="J.K. Rowling"><IconUser/></MenuItem>
    <MenuItem link="/autores/j-r-r-tolkien" texto="J.R.R. Tolkien"><IconUser/></MenuItem>
    <MenuItem link="/autores/george-r-r-martin" texto="George R.R. Martin"><IconUser/></MenuItem>
  </Menu>

  <Menu titulo="Categorias">
    <MenuItem link="/autores" texto="Últimas notícias"><Icon24Hours/></MenuItem>
    <MenuItem link="/autores" texto="Notícias populares"><IconRss/></MenuItem>
    <MenuItem link="/autores" texto="Facebook"><IconBrandFacebook/></MenuItem>
    <MenuItem link="/autores" texto="Instagram"><IconBrandInstagram/></MenuItem>
    <MenuItem link="/autores" texto="Youtube"><IconBrandYoutube/></MenuItem>
  </Menu>
</aside>
