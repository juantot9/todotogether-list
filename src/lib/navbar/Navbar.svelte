<script lang="ts">
	import thingsToDo from '$lib/constants/thingsToDo';
  import { AppBar, LightSwitch, popup } from '@skeletonlabs/skeleton';
  import type { PopupSettings } from '@skeletonlabs/skeleton';

	let menuButtonIsClicked = false;

	const showRoutes = (popupState: boolean) => {
    if(popupState) {
      menuButtonIsClicked = true; 
      return
    } 
		menuButtonIsClicked = false;
	};
  
  const popupFeatured: PopupSettings = {
  	event: 'focus-click',
  	target: 'popupFeatured',
  	placement: 'bottom',
    state: (e: Record<string, boolean>) => showRoutes(e.state)
  };
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" class="bg-gradient-to-r from-sky-400 from-35% to-pink-400 to-65%">
  <svelte:fragment slot="lead">
    <div class="z-20 flex items-center md:hidden">
			<button
				use:popup={popupFeatured}
				type="button"
				class="btn-icon btn-icon-lg variant-ghost-tertiary"
				aria-controls="mobile-menu"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
        <span style="margin: 0;">
				{#if !menuButtonIsClicked}
          <svg
					 class="block h-6 w-6"
					 xmlns="http://www.w3.org/2000/svg"
					 fill="none"
					 viewBox="0 0 24 24"
					 stroke-width="2"
					 stroke="currentColor"
					 aria-hidden="true"
					>
					  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{:else}
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
					{/if}
        </span>
			</button>
		</div>
    <button type="button" class="relative z-10 w-1 flex-1 items-center justify-start hidden md:flex">
			<a
				href="/"
				class="btn-icon variant-ghost-tertiary"
        data-sveltekit-preload-data="hover"
	    >
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
				  <path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
					/>
				</svg>
			</a>
		</button>
  </svelte:fragment>
	<nav class="w-auto justify-center">
		<div class="mx-auto max-w-full sm:px-6 lg:px-8 hidden md:block">
			<div class="relative flex h-16 flex-1 items-center sm:justify-center">
				<div
					class="absolute z-20 flex min-w-fit flex-1 items-center justify-center sm:items-stretch"
				>
					<div class="flex space-x-4 btn-group variant-ghost-tertiary">
						{#each thingsToDo as thingToDo}
							<a
								href={thingToDo.path}
								class="btn variant-ghost-tertiary"
                data-sveltekit-preload-data="hover"
								><b>{thingToDo.label}</b></a
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
    <a
			href="/"
			class="btn-icon btn-icon-lg variant-ghost-tertiary md:hidden" 
      data-sveltekit-preload-data="hover"
	  >
			<svg
        xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
      >
			  <path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
				/>
			</svg>
		</a>
	</nav>
  <svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
</AppBar>
		<div class="md:hidden" id="mobile-menu" data-popup="popupFeatured">
			<div class="btn-group-vertical variant-filled-tertiary p-2">
				{#each thingsToDo as thing}
        <a
					href={thing.path}
					class="btn variant-ghost-tertiary"
        >{thing.label}
        </a>
				{/each}
			</div>
		</div>
