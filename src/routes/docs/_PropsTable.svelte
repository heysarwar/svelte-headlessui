<script lang="ts">
  export let props: [];  

  // replaceAll(/ `/g, '<code>').replaceAll(/`/g, '</code>')
</script>

<table>
	<thead>
		<tr>
			<th>Prop</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		{#each props as prop}
			<tr>
				<td>{prop.name}</td>
				<td><code>{prop.type?.replace(/'/g, '"')}</code></td>
				<td><code>{prop.value?.replace(/'/g, '"') ?? ''}</code></td>
				<td>{@html prop.description ? prop.description : ''}</td>
			</tr>
		{/each}
	</tbody>
</table>

<!-- <pre>{JSON.stringify({props})}</pre> -->