import Team from "./js/Team";
import Daemon from "./js/Daemon";
import Magician from "./js/Magician";

const notAvengers = new Team();

const diablo = new Daemon('Diablo', 'Daemon');
const triss = new Magician('Triss', 'Magician');

notAvengers.addAll(triss, diablo)

for (let item of notAvengers){
    console.log(item)
}