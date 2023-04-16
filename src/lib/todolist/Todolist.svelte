<script lang="ts">
    import thingsToDo from '$lib/constants/thingsToDo';

    export let currentPage: string | null;
    const currentThingToDo = thingsToDo.find(thingToDo => thingToDo.path === currentPage);
</script>
<main style="display: grid" class="h-full items-stretch self-stretch">
    <article style="display: grid" class="h-full grid-cols-1 max-w5xl">
        <h1 class="flex h-10 text-2xl sm:text-4xl font-bold">{ currentThingToDo?.label }</h1>
        <table>
            
        </table>
    </article>
</main>
