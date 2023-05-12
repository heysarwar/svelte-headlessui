<script lang="ts" context="module">
  export interface TocItem {
    id: string;
    url: string;
    title: string;
    headingLevel: number;
    index: number;
    items?: TocItem[];
  }
</script>

<script lang="ts">
  export let items: TocItem[] = [];
  export let activeId: string | undefined;
  export let nested: boolean = false
</script>

<ol class:pl-4={nested}>
  {#each items as item (item.url)}
    <li>
      <a href={item.url} class:active={item.id === activeId}>{item.title}</a>
      {#if item.items}
        <svelte:self items={item.items} {activeId} nested={true} />
      {/if}
    </li>
  {/each}
</ol>

<style lang="postcss">
  .active {
    @apply font-bold;
  }
  li {
    @apply pt-3;
  }
  a:hover {
    @apply underline;
  }
</style>
