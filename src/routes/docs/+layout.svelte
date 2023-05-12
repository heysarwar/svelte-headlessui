<script lang="ts">
  import { page } from "$app/stores";
  import Sidebar from "./_Sidebar.svelte";
  import TableOfContents from "./_TableOfContents.svelte";

  let el: HTMLElement | null = null;

  $: isExample = $page.routeId == "docs/examples";
</script>

<svelte:head>
  <link rel="stylesheet" href="/prism-one-light.css" />
</svelte:head>

{#if isExample}
  <slot />
{:else}
  <div class="mx-auto flex max-w-8xl px-4 sm:px-6 lg:px-8">
    <div class="w-64 hidden md:block flex-shrink-0">
      <div class="sticky top-16 pt-8 pb-4 max-h-screen overflow-y-auto">
        <Sidebar />
      </div>
    </div>

    <article class="flex min-w-0 flex-1 py-8" bind:this={el}>
      <div class="prose order-1 mx-auto min-w-0 max-w-[800px] flex-1">
        <slot />
      </div>
    </article>
    <div class="z-10 text-sm order-2 hidden w-64 min-w-0 shrink-0 xl:block xl:pl-8">
      <nav
        title="Table of contents"
        class="sticky top-16 pt-8 pl-6 pb-4 max-h-screen overflow-y-auto"
      >
        {#key $page}
          <p class="text-xs font-semibold uppercase tracking-wide">
            On this page
          </p>
          <TableOfContents {el} rootMargin="-61px 0% -85% 0%" />
        {/key}
      </nav>
    </div>
  </div>
{/if}

<style lang="postcss">
  article {
    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4) {
      @apply before:h-20 before:-mt-20 before:block before:content-[""];

      :global(a) {
        @apply no-underline hover:underline;
      }
    }

    :global(table) {
      @apply mt-8;
    }
  }
</style>
