"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cachorro_1 = require("./Cachorro");
var Cavalo_1 = require("./Cavalo");
var pregui_a_1 = require("./pregui\u00E7a");
var cavalo = new Cavalo_1.Cavalo('Pé de Pano', 8, 'relinxou');
var cachorro = new Cachorro_1.Cachorro('tobi', 3, 'latiu.');
var preguica = new pregui_a_1.Preguica('Preguiça', 4, 'barulho');
function takeoff(animal) {
    animal.subir();
}
function takeoff1(animal) {
    animal.correr();
}
takeoff(preguica);
takeoff1(cavalo);
takeoff1(cachorro);
;
