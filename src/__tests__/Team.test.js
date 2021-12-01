import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Person from '../js/Person';
import Team from '../js/Team';

test('Test constructor class Team & Team add', () => {
  const character1 = new Daemon('Azmodan', 'Daemon');
  // const character2 = new Character('Triss', 'Magician');

  const result = new Team();
  result.add(character1);
  const characterList = new Set();
  characterList.add(character1);
  const expected = {
    members: characterList,
  };

  expect(result.members).toEqual(expected.members);
});

test('Test constructor class Team & Team error', () => {
  const character1 = new Daemon('Azmodan', 'Daemon');

  expect(() => { const result = new Team(); result.add(character1); result.add(character1); }).toThrowError(new Error('Team already has this character'));
});

test('Test addAll (several characters)', () => {
  const character1 = new Daemon('Azmodan', 'Daemon');
  const character2 = new Magician('Triss', 'Magician');
  const result = new Team();
  result.addAll(character1, character2);

  const listOfCharacters = new Set();
  listOfCharacters.add(character1);
  listOfCharacters.add(character2);
  const expected = {
    members: listOfCharacters,
  };

  expect(result.members).toEqual(expected.members);
});

test('Test convert Set-collection to Array', () => {
  const character1 = new Daemon('Azmodan', 'Daemon');
  const character2 = new Magician('Triss', 'Magician');
  const resultTeam = new Team();
  resultTeam.addAll(character1, character2);
  const result = resultTeam.toArray();

  const expected = [{
    name: 'Azmodan', type: 'Daemon', level: 1, health: 100, _attack: 10, defence: 40, distance: undefined,
  }, {
    name: 'Triss', type: 'Magician', level: 1, health: 100, _attack: 10, defence: 40, distance: undefined,
  }];

  expect(result).toEqual(expected);
});

test('Testing generator in class Team', ()=> {
  const notAvengers = new Team();
  const diablo = new Daemon('Diablo', 'Daemon');
  const triss = new Magician('Triss', 'Magician');
  notAvengers.addAll(diablo, triss);
  let result = [];
  for(let item of notAvengers){
    result.push(item);
  }

  const character1 = new Person({
    name: "Diablo",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  })

  const character2 = new Person({
    name: "Triss",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  })

  const expected = [character1, character2]
  expect(result).toEqual(expected)
})
