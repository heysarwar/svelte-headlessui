<script lang="ts">
  import { afterUpdate } from "svelte";
  export let code = "";
  export let lang = "js";

  $: highlightedCode = "";

  afterUpdate(async () => {
    const { default: Prism } = await import("prismjs");    

    highlightedCode = Prism.highlight(code, Prism.languages.javascript, 'javascript');
  });
</script>

<pre
  class="scrollbar-custom overflow-auto px-5 scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-400 dark:scrollbar-thumb-white/10 dark:hover:scrollbar-thumb-white/20"><code
    class="language-{lang}"
    >{@html highlightedCode || code.replaceAll("<", "&lt;")}</code
  ></pre>
