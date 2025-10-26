<script lang="ts">
	import { setViewportHeightVar } from '$lib/utils';
	setViewportHeightVar();

	let { children } = $props();
</script>

{@render children?.()}
