<script lang="ts">
    import Todolist from "$lib/todolist/Todolist.svelte";
    import { page } from "$app/stores";
</script>
<Todolist currentPage={$page.url.pathname}></Todolist>