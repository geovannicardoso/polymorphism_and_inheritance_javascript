import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./preguiça";
import { ICanRun } from "./ICanRun";
import { ICanTree } from "./ICanTree";

const cavalo = new Cavalo('Pé de Pano', 8, 'relinxou')
const cachorro = new Cachorro('tobi', 3,'latiu.')
const preguica = new Preguica('Preguiça', 4, 'barulho')

function takeoff(animal : ICanTree) {
    animal.subir()
}
function takeoff1(animal : ICanRun) {
    animal.correr()
}

takeoff(preguica);
takeoff1(cavalo);
takeoff1(cachorro); ;