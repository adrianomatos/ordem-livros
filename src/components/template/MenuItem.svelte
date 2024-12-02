<script>
  export let link = "";
  export let texto = "";
</script>

<li>
  <a
    class="flex gap-2 items-center px-4 py-2 hover:underline text-zinc-300 hover:text-white hover:bg-white/10"
    href={link}
  >
    <slot></slot>
    <span>{texto}</span>
  </a>
</li>
