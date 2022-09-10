/*Se diseña un interfaz con los atributos requeridos.*/
export interface Personaje {
    id:number;
    image: string;
    name: string;
    status: string;
    species: string;
    location: string;
    episode: string;
    isFavorite?: boolean; 
}