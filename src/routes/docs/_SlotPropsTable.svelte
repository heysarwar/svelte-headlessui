<script lang="ts">
  export let props: [];  

  // replaceAll(/ `/g, '<code>').replaceAll(/`/g, '</code>')
</script>

<table>
	<thead>
		<tr>
			<th>Slot prop</th>
			<th>Type</th>			
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		{#each props as prop}
			<tr>
				<td>{prop.slot_props}</td>
				<td><code>{prop.type?.replace(/'/g, '"')}</code></td>				
				<td>{@html prop.description ? prop.description : ''}</td>
			</tr>
		{/each}
	</tbody>
</table>

<!-- <pre>{JSON.stringify(props, null, 2)}</pre> -->