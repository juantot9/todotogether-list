<script lang="ts">
  // import { supabase } from '$lib/constants/supabaseClient'
  import thingsToDo from '$lib/constants/thingsToDo';
  import { onMount } from 'svelte';

  let menuButtonIsClicked = false;

  const showRoutes = () => {
    menuButtonIsClicked = !menuButtonIsClicked;
  }

  // let data: any;

  // const obtenerNombrePeliculas = async () => {
  //   return await supabase.from('pelicula').select('nombre');
  // };

  // onMount(async () => {
  //   const res = await obtenerNombrePeliculas();
  //   data = res.data?.at(0).nombre;
  // });
</script>
<header>
  <nav class="bg-rose-400">
      <div class="max-w-full mx-auto sm:px-6 lg:px-8">
          <div class="relative flex-1 flex items-center sm:justify-center h-16">

            <div class="absolute inset-y-0 flex items-center sm:hidden z-20">
              <button on:click={showRoutes} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-slate-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                {#if !menuButtonIsClicked}
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                {:else}
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                {/if}
              </button>
            </div>

            <button class="relative flex-1 flex items-center justify-center sm:justify-start w-1 z-10">
              <a href="/" class="inline-flex items-center justify-center p-2 rounded-md text-slate-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>    
              </a>
            </button>

            <div class="absolute flex-1 flex items-center justify-center sm:items-stretch z-20">
              <div class="hidden sm:block">
                <div class="flex space-x-4">
                  {#each thingsToDo as thing}
                    <a href="{thing.path}" class="text-slate-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{thing.name}</a>
                  {/each}
                </div>
              </div>
            </div>

          </div>
        </div>

      {#if menuButtonIsClicked}
        <div class="sm:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1">
            {#each thingsToDo as thing}
            <a href="{thing.path}" class="rounded-none border-l-4 border-l-slate-100 text-slate-100 hover:bg-gray-700 hover:text-white mx-1 px-2 py-2 rounded-md text-sm font-medium block">{thing.name}</a>
            {/each}
          </div>
        </div>
      {/if}
  </nav>
</header>
