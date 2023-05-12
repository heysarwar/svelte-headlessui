<script lang="ts" context="module">
  type TTabPanelsProps<
    TSlotProps extends {},
    TAsProp extends SupportedAs
  > = TPassThroughProps<TSlotProps, TAsProp, "div"> & {};
</script>

<script lang="ts">
  import type { HTMLActionArray } from "$lib/hooks/use-actions";
  import type { SupportedAs } from "$lib/internal/elements";
  import { forwardEventsBuilder } from "$lib/internal/forwardEventsBuilder";
  import type { TPassThroughProps } from "$lib/types";
  import Render from "$lib/utils/Render.svelte";
  import { get_current_component } from "svelte/internal";
  import { useTabsContext } from "./TabGroup.svelte";

  /***** Props *****/
  type TAsProp = $$Generic<SupportedAs>;
  type $$Props = TTabPanelsProps<typeof slotProps, TAsProp>;

    /**
     * The element the <code>TabPanels</code> should render as
     */
  export let as: SupportedAs = "div";
  export let use: HTMLActionArray = [];

  /***** Events *****/
  const forwardEvents = forwardEventsBuilder(get_current_component());

  /***** Component *****/
  let api = useTabsContext("TabPanels");

  /**
   * @slot {{ selectedIndex: number | null; }} __default__ The currently selected index
   */
  $: slotProps = { selectedIndex: $api.selectedIndex };
</script>

<Render
  {...$$restProps}
  {as}
  {slotProps}
  use={[...use, forwardEvents]}
  name={"TabPanels"}
>
  <slot {...slotProps} />
</Render>
