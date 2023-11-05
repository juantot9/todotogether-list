export type ThingToDo = {
    path: string,
    name: 'restaurantes' | 'sitios' | 'peliculas' | 'actividades',
    label: string
};

const thingsToDo: Array<ThingToDo> = [
    {path: '/restaurants', name: 'restaurantes', label:'🍣 Restaurantes'},
    {path: '/places', name:'sitios', label:'🌍 Sitios'},
    {path: '/movies', name:'peliculas', label:'🎥 Películas'},
    {path: '/activities', name:'actividades', label:'⛸ Actividades'},
];

export default thingsToDo;
