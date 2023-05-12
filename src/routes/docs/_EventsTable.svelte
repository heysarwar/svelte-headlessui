<script lang="ts">
  export let events: [];  
</script>

<table>
	<thead>
		<tr>
			<th>Event name</th>
			<th>Type of event `.detail`</th>			
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		{#each events as event}
			<tr>
				<td>{event.name}</td>
				<td><code>{event.detail?.replace(/'/g, '"')}</code></td>				
				<td>{@html event.description ? event.description : ''}</td>
			</tr>
		{/each}
	</tbody>
</table>

<!-- <pre>{JSON.stringify({events})}</pre> -->