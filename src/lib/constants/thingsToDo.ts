export type ThingToDo = {
    path: string,
    name: 'restaurantes' | 'sitios' | 'peliculas' | 'actividades',
    label: string
};

const thingsToDo: Array<ThingToDo> = [
    {path: '/restaurantes', name: 'restaurantes', label:'🍣 Restaurantes'},
    {path: '/sitios', name:'sitios', label:'🌍 Sitios'},
    {path: '/peliculas', name:'peliculas', label:'🎥 Películas'},
    {path: '/actividades', name:'actividades', label:'⛸ Actividades'},
];

export default thingsToDo;