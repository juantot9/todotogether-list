<script lang="ts">
  import '../app.postcss';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

</script>

<AppShell class="bg-gradient-to-br variant-gradient-primary-secondary">
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
  <slot />
</AppShell>

